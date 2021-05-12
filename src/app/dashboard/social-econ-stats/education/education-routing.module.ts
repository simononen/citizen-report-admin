import { RouterModule, Routes } from '@angular/router';

import { EditEducationStatsComponent } from './edit-education-stats/edit-education-stats.component';
import { EducationComponent } from './education.component';
import { EducationStatsListComponent } from './education-stats-list/education-stats-list.component';
import { NewEducationStatsComponent } from './new-education-stats/new-education-stats.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: EducationStatsListComponent },
  { path: 'education-stats-list', component: EducationStatsListComponent },
  { path: 'new-education-stats', component: NewEducationStatsComponent },
  { path: 'edit-education-stats', component: EditEducationStatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
