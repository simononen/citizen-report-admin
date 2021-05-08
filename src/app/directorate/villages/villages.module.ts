import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditVillageComponent } from './edit-village/edit-village.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewVillageComponent } from './new-village/new-village.component';
import { NgModule } from '@angular/core';
import { VillagesComponent } from './villages.component';
import { VillagesListComponent } from './villages-list/villages-list.component';
import { VillagesRoutingModule } from './villages-routing.module';

@NgModule({
  declarations: [
    VillagesComponent,
    VillagesListComponent,
    NewVillageComponent,
    EditVillageComponent
  ],
  imports: [
    CommonModule,
    VillagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class VillagesModule { }
