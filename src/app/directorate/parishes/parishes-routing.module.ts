import { RouterModule, Routes } from '@angular/router';

import { EditParishComponent } from './edit-parish/edit-parish.component';
import { NewParishComponent } from './new-parish/new-parish.component';
import { NgModule } from '@angular/core';
import { ParishesComponent } from './parishes.component';
import { ParishesListComponent } from './parishes-list/parishes-list.component';

const routes: Routes = [
  { path: '', component: ParishesListComponent },
  { path: 'parishes-list', component: ParishesListComponent},
  { path: 'new-subcounty', component: NewParishComponent },
  { path: 'edit-subcounty', component: EditParishComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParishesRoutingModule { }
