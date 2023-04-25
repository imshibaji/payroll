import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employeeList: any = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getEmployeeList({relations: ["department", "salaryCollection"]}).subscribe(res => {
      if(res.isSuccess) {
        this.employeeList = res.payload;
      }
    });
  }

}
