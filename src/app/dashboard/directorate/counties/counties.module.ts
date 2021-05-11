import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CountiesComponent } from './counties.component';
import { CountiesListComponent } from './counties-list/counties-list.component';
import { CountiesRoutingModule } from './counties-routing.module';
import { EditCountyComponent } from './edit-county/edit-county.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewCountyComponent } from './new-county/new-county.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CountiesComponent,
    NewCountyComponent,
    EditCountyComponent,
    CountiesListComponent
  ],
  imports: [
    CommonModule,
    CountiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CountiesModule { }
