import { RouterModule, Routes } from '@angular/router';

import { DistrictComponent } from './district.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { EditDistrictComponent } from './edit-district/edit-district.component';
import { NewDistrictComponent } from './new-district/new-district.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DistrictListComponent },
  { path: 'districts', component: DistrictListComponent },
  { path: 'district-lists', component: DistrictListComponent },
  { path: 'new-district', component: NewDistrictComponent },
  { path: 'edit-district', component: EditDistrictComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
