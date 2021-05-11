import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoryLessonComponent } from './edit-history-lesson.component';

describe('EditHistoryLessonComponent', () => {
  let component: EditHistoryLessonComponent;
  let fixture: ComponentFixture<EditHistoryLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHistoryLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoryLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
