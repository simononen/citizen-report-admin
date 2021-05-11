import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditHealthStatsComponent } from './edit-health-stats/edit-health-stats.component';
import { HealthComponent } from './health.component';
import { HealthRoutingModule } from './health-routing.module';
import { HealthStatsListComponent } from './health-stats-list/health-stats-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewHealthStatsComponent } from './new-health-stats/new-health-stats.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HealthComponent,
    HealthStatsListComponent,
    EditHealthStatsComponent,
    NewHealthStatsComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class HealthModule { }
