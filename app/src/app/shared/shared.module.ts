import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './component/employee/employee.component';
import { DepartmentComponent } from './component/department/department.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EmployeeComponent, DepartmentComponent]
})
export class SharedModule { }
