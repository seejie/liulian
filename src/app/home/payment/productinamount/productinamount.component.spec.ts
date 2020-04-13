import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinamountComponent } from './productinamount.component';

describe('ProductinamountComponent', () => {
  let component: ProductinamountComponent;
  let fixture: ComponentFixture<ProductinamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductinamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductinamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
