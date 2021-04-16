import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictDetailComponent } from './district-detail/district-detail.component';
import { NewDistrictComponent } from './new-district/new-district.component';
import { EditDistrictComponent } from './edit-district/edit-district.component';


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
    DistrictRoutingModule
  ]
})
export class DistrictModule { }
