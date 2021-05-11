import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryLessonsListComponent } from './history-lessons-list.component';

describe('HistoryLessonsListComponent', () => {
  let component: HistoryLessonsListComponent;
  let fixture: ComponentFixture<HistoryLessonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryLessonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryLessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
