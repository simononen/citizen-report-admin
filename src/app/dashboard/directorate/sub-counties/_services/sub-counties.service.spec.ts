import { TestBed } from '@angular/core/testing';

import { SubCountiesService } from './sub-counties.service';

describe('SubCountiesService', () => {
  let service: SubCountiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCountiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
