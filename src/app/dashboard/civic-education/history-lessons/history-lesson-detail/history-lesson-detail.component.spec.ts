import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryLessonDetailComponent } from './history-lesson-detail.component';

describe('HistoryLessonDetailComponent', () => {
  let component: HistoryLessonDetailComponent;
  let fixture: ComponentFixture<HistoryLessonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryLessonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryLessonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
