import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public departmentList: any = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDepartmentList({}).subscribe(res => {
      if(res.isSuccess) {
        this.departmentList = res.payload;
      }
    });
  }

}
