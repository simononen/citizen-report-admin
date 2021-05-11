import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditEducationStatsComponent } from './edit-education-stats/edit-education-stats.component';
import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education-routing.module';
import { EducationStatsListComponent } from './education-stats-list/education-stats-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewEducationStatsComponent } from './new-education-stats/new-education-stats.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    EducationComponent,
    EducationStatsListComponent,
    NewEducationStatsComponent,
    EditEducationStatsComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class EducationModule { }
