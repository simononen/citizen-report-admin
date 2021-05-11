import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryLessonsComponent } from './history-lessons.component';

describe('HistoryLessonsComponent', () => {
  let component: HistoryLessonsComponent;
  let fixture: ComponentFixture<HistoryLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
