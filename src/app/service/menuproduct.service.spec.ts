import { TestBed } from '@angular/core/testing';

import { MenuproductService } from './menuproduct.service';

describe('MenuproductService', () => {
  let service: MenuproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
