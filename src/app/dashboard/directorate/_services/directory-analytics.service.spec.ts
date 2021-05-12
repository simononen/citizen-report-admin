import { TestBed } from '@angular/core/testing';

import { DirectoryAnalyticsService } from './directory-analytics.service';

describe('DirectoryAnalyticsService', () => {
  let service: DirectoryAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
