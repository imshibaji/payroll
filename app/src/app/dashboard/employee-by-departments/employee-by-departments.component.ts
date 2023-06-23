import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-by-departments',
  templateUrl: './employee-by-departments.component.html',
  styleUrls: ['./employee-by-departments.component.scss']
})
export class EmployeeByDepartmentsComponent implements OnInit {
  @Input() employeeList: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
