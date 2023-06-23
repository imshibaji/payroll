import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import 'hammerjs';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeByDepartmentsComponent } from './employee-by-departments/employee-by-departments.component';
import { SalaryModule } from '../salary/salary.module';
import { ActiveEmpPipe } from './active-emp.pipe';
import { EmailDomainComponent } from './email-domain/email-domain.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DepartmentsComponent,
    EmployeeByDepartmentsComponent,
    ActiveEmpPipe,
    EmailDomainComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes),
    SharedModule,
    SalaryModule
  ]
})
export class DashboardModule { }
