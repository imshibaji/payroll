import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './component/employee/employee.component';
import { DepartmentComponent } from './component/department/department.component';
import { SalaryModule } from '../salary/salary.module';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    SalaryModule,
    MatDividerModule
  ],
  exports: [EmployeeComponent, DepartmentComponent]
})
export class SharedModule { }
