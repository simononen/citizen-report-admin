import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import { DistrictDetailComponent } from './district-detail/district-detail.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictRoutingModule } from './district-routing.module';
import { EditDistrictComponent } from './edit-district/edit-district.component';
import { ListLoaderComponent } from "src/app/shared/list-loader/list-loader.component";
import { MaterialModule } from '../../../shared/material/material.module';
import { NewDistrictComponent } from './new-district/new-district.component';
import { NgModule } from '@angular/core';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    DistrictComponent,
    DistrictListComponent,
    DistrictDetailComponent,
    NewDistrictComponent,
    EditDistrictComponent
  ],
  imports: [
  CommonModule,
    DistrictRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class DistrictModule { }
