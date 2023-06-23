import { reduceRight } from './../../../../../api/node_modules/@types/async/index.d';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public departmentList: any = [];
  public employeeList: any = [];
  public popularEmailDomain: any = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDepartmentWithAssociatedEmployees().subscribe(res => {
      if(res.isSuccess) {
        this.departmentList = res.payload;
        this.employeeList = this.departmentList;
        this.popularEmailDomain = this.emailCount(this.departmentList);
      }
    });
  }

  emailCount(empData: any){
    const emp = empData.map((item: any) => {
      item = item.employeeCollection.map((e: any) => {
        return e.email;
      });
      return item;
    });

    // Join All Emails
    const emails = emp.join().split(',');
    const groupByEmailDomain = emails.reduce((result: any, email: any) => {
      const domain = email.split("@")[1];
      if(!result[domain]){
        result[domain] = [];
      }
      result[domain].push(email);
      return result;
    }, {});

    return groupByEmailDomain;
  }



  onTabChanged(event: any) {
    // console.log(event);
  }

}
