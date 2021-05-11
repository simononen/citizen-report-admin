import { TestBed } from '@angular/core/testing';

import { HistoryLessonService } from './history-lesson.service';

describe('HistoryLessonService', () => {
  let service: HistoryLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
