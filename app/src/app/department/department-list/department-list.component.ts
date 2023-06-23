import { forEach } from './../../../../../api/node_modules/@types/async/index.d';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departmentList: any = [];
  
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDepartmentWithAssociatedEmployees().subscribe(res => {
      if(res.isSuccess) {
        this.departmentList = res.payload.map((item: any) => {
          const emp = item.employeeCollection.map((employee: any) => {
            let salary = 0;
            if(employee.salaryCollection[0].isActive === 1){
              salary = Number(employee.salaryCollection[0].salary);
            }
            return {...employee, salary};
          });

          const depAmount = emp.map((item: any) => Number(item.salary));
          let totalAmount: number = 0;
          depAmount.forEach((item: any) => {
            totalAmount += item;
          })

          return {...item, totalAmount};
        });
        // console.log(this.departmentList);
      }
    });
  }
}
