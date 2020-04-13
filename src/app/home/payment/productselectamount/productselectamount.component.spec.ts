import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductselectamountComponent } from './productselectamount.component';

describe('ProductselectamountComponent', () => {
  let component: ProductselectamountComponent;
  let fixture: ComponentFixture<ProductselectamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductselectamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductselectamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
