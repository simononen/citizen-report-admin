import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { ParishesComponent } from './parishes.component';
import { ParishesRoutingModule } from './parishes-routing.module';
import { ParishesListComponent } from './parishes-list/parishes-list.component';
import { NewParishComponent } from './new-parish/new-parish.component';
import { EditParishComponent } from './edit-parish/edit-parish.component';

@NgModule({
  declarations: [
    ParishesComponent,
    ParishesListComponent,
    NewParishComponent,
    EditParishComponent
  ],
  imports: [
    CommonModule,
    ParishesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ParishesModule { }
