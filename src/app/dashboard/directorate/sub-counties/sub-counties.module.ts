import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditSubCountyComponent } from './edit-sub-county/edit-sub-county.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewSubCountyComponent } from './new-sub-county/new-sub-county.component';
import { NgModule } from '@angular/core';
import { SubCountiesComponent } from './sub-counties.component';
import { SubCountiesListComponent } from './sub-counties-list/sub-counties-list.component';
import { SubCountiesRoutingModule } from './sub-counties-routing.module';

@NgModule({
  declarations: [
    SubCountiesComponent,
    SubCountiesListComponent,
    NewSubCountyComponent,
    EditSubCountyComponent
  ],
  imports: [
    CommonModule,
    SubCountiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SubCountiesModule { }
