import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  @Input() public departmentList: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
