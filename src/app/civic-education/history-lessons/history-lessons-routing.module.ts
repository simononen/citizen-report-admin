import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryLessonsComponent } from './history-lessons.component';

const routes: Routes = [{ path: '', component: HistoryLessonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryLessonsRoutingModule { }
