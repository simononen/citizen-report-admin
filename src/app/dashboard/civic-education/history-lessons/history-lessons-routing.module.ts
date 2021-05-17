import { RouterModule, Routes } from '@angular/router';

import { EditHistoryLessonComponent } from './edit-history-lesson/edit-history-lesson.component';
import { HistoryLessonsComponent } from './history-lessons.component';
import { HistoryLessonsListComponent } from './history-lessons-list/history-lessons-list.component';
import { NewHistoryLessonComponent } from './new-history-lesson/new-history-lesson.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HistoryLessonsListComponent },
  { path: 'history-lessons-list', component: HistoryLessonsListComponent},
  { path: 'new-history-lesson', component: NewHistoryLessonComponent },
  { path: 'edit-history-lesson/:id', component: EditHistoryLessonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HistoryLessonsRoutingModule { }
