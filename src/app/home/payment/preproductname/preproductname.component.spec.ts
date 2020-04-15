import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreproductnameComponent } from './preproductname.component';

describe('PreproductnameComponent', () => {
  let component: PreproductnameComponent;
  let fixture: ComponentFixture<PreproductnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreproductnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreproductnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});