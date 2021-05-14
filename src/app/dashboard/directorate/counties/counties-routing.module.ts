import { RouterModule, Routes } from '@angular/router';

import { CountiesComponent } from './counties.component';
import { CountiesListComponent } from './counties-list/counties-list.component';
import { EditCountyComponent } from './edit-county/edit-county.component';
import { NewCountyComponent } from './new-county/new-county.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CountiesListComponent },
  { path: 'counties-list', component: CountiesListComponent },
  { path: 'new-county', component: NewCountyComponent },
  { path: 'edit-county/:id', component: EditCountyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CountiesRoutingModule { }
