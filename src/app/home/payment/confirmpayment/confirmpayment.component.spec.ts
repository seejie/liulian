import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmpaymentComponent } from './confirmpayment.component';

describe('ConfirmpaymentComponent', () => {
  let component: ConfirmpaymentComponent;
  let fixture: ComponentFixture<ConfirmpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
