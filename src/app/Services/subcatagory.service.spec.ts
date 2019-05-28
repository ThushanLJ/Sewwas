import { TestBed } from '@angular/core/testing';

import { SubcatagoryService } from './subcatagory.service';

describe('SubcatagoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcatagoryService = TestBed.get(SubcatagoryService);
    expect(service).toBeTruthy();
  });
});
