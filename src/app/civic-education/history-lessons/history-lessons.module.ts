import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryLessonsRoutingModule } from './history-lessons-routing.module';
import { HistoryLessonsComponent } from './history-lessons.component';
import { HistoryLessonsListComponent } from './history-lessons-list/history-lessons-list.component';
import { HistoryLessonListComponent } from './history-lesson-list/history-lesson-list.component';
import { NewHistoryLessonComponent } from './new-history-lesson/new-history-lesson.component';
import { EditHistoryLessonComponent } from './edit-history-lesson/edit-history-lesson.component';
import { HistoryLessonDetailComponent } from './history-lesson-detail/history-lesson-detail.component';


@NgModule({
  declarations: [HistoryLessonsComponent, HistoryLessonsListComponent, HistoryLessonListComponent, NewHistoryLessonComponent, EditHistoryLessonComponent, HistoryLessonDetailComponent],
  imports: [
    CommonModule,
    HistoryLessonsRoutingModule
  ]
})
export class HistoryLessonsModule { }
