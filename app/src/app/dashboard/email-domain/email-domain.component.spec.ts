import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDomainComponent } from './email-domain.component';

describe('EmailDomainComponent', () => {
  let component: EmailDomainComponent;
  let fixture: ComponentFixture<EmailDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
