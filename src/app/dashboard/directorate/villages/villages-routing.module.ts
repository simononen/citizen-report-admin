import { RouterModule, Routes } from '@angular/router';

import { EditVillageComponent } from './edit-village/edit-village.component';
import { NewVillageComponent } from './new-village/new-village.component';
import { NgModule } from '@angular/core';
import { VillagesComponent } from './villages.component';
import { VillagesListComponent } from './villages-list/villages-list.component';

const routes: Routes = [
  { path: '', component: VillagesListComponent },
  { path: 'villages-list', component: VillagesListComponent},
  { path: 'new-village', component: NewVillageComponent },
  { path: 'edit-village/:id', component: EditVillageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
