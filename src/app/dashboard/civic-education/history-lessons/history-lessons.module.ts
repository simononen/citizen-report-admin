import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';
import { EditHistoryLessonComponent } from './edit-history-lesson/edit-history-lesson.component';
import { HistoryLessonDetailComponent } from './history-lesson-detail/history-lesson-detail.component';
import { HistoryLessonsComponent } from './history-lessons.component';
import { HistoryLessonsListComponent } from './history-lessons-list/history-lessons-list.component';
import { HistoryLessonsRoutingModule } from './history-lessons-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewHistoryLessonComponent } from './new-history-lesson/new-history-lesson.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HistoryLessonsComponent, HistoryLessonsListComponent, NewHistoryLessonComponent, EditHistoryLessonComponent, HistoryLessonDetailComponent],
  imports: [
    CommonModule,
    HistoryLessonsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CKEditorModule
  ]
})
export class HistoryLessonsModule { }
