import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidsummeryComponent } from './paidsummery.component';

describe('PaidsummeryComponent', () => {
  let component: PaidsummeryComponent;
  let fixture: ComponentFixture<PaidsummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidsummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidsummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
