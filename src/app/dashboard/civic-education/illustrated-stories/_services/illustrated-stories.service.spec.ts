import { TestBed } from '@angular/core/testing';

import { IllustratedStoriesService } from './illustrated-stories.service';

describe('IllustratedStoriesService', () => {
  let service: IllustratedStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IllustratedStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
