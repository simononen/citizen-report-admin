import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditParishComponent } from './edit-parish/edit-parish.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewParishComponent } from './new-parish/new-parish.component';
import { NgModule } from '@angular/core';
import { ParishesComponent } from './parishes.component';
import { ParishesListComponent } from './parishes-list/parishes-list.component';
import { ParishesRoutingModule } from './parishes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

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
    MaterialModule,
    SharedModule,
  ]
})
export class ParishesModule { }
