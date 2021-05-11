import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHistoryLessonComponent } from './new-history-lesson.component';

describe('NewHistoryLessonComponent', () => {
  let component: NewHistoryLessonComponent;
  let fixture: ComponentFixture<NewHistoryLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHistoryLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHistoryLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
