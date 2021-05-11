import { RouterModule, Routes } from '@angular/router';

import { EditGovernanceStatsComponent } from './edit-governance-stats/edit-governance-stats.component';
import { GovernanceComponent } from './governance.component';
import { GovernanceStatsListComponent } from './governance-stats-list/governance-stats-list.component';
import { NewGovernanceStatsComponent } from './new-governance-stats/new-governance-stats.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: GovernanceStatsListComponent },
  { path: 'governance-stats-list', component: GovernanceStatsListComponent },
  { path: 'new-governance-stats', component: NewGovernanceStatsComponent },
  { path: 'edit-governance-stats', component: EditGovernanceStatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovernanceRoutingModule { }
