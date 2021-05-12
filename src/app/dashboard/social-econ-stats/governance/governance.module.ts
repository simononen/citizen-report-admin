import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditGovernanceStatsComponent } from './edit-governance-stats/edit-governance-stats.component';
import { GovernanceComponent } from './governance.component';
import { GovernanceRoutingModule } from './governance-routing.module';
import { GovernanceStatsListComponent } from './governance-stats-list/governance-stats-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewGovernanceStatsComponent } from './new-governance-stats/new-governance-stats.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    GovernanceComponent,
    EditGovernanceStatsComponent,
    NewGovernanceStatsComponent,
    GovernanceStatsListComponent
  ],
  imports: [
    CommonModule,
    GovernanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class GovernanceModule { }
