import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreproductamountComponent } from './preproductamount.component';

describe('PreproductamountComponent', () => {
  let component: PreproductamountComponent;
  let fixture: ComponentFixture<PreproductamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreproductamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreproductamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
