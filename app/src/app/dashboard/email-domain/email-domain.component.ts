import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-domain',
  templateUrl: './email-domain.component.html',
  styleUrls: ['./email-domain.component.scss']
})
export class EmailDomainComponent implements OnInit {
  @Input() public popularEmailDomain: any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  getLength(val: any){
    return val.length;
  }
}
