import { RouterModule, Routes } from '@angular/router';

import { EditHealthStatsComponent } from './edit-health-stats/edit-health-stats.component';
import { HealthComponent } from './health.component';
import { HealthStatsListComponent } from './health-stats-list/health-stats-list.component';
import { NewHealthStatsComponent } from './new-health-stats/new-health-stats.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HealthStatsListComponent },
  { path: 'health-stats-list', component: HealthStatsListComponent },
  { path: 'new-health-stats', component: NewHealthStatsComponent },
  { path: 'edit-health-stats', component: EditHealthStatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
