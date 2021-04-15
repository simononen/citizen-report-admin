import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryLessonListComponent } from './history-lesson-list.component';

describe('HistoryLessonListComponent', () => {
  let component: HistoryLessonListComponent;
  let fixture: ComponentFixture<HistoryLessonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryLessonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryLessonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
