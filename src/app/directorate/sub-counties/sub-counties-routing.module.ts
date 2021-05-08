import { RouterModule, Routes } from '@angular/router';

import { EditSubCountyComponent } from './edit-sub-county/edit-sub-county.component';
import { NewSubCountyComponent } from './new-sub-county/new-sub-county.component';
import { NgModule } from '@angular/core';
import { SubCountiesComponent } from './sub-counties.component';
import { SubCountiesListComponent } from './sub-counties-list/sub-counties-list.component';

const routes: Routes = [
  { path: '', component: SubCountiesListComponent },
  { path: 'subcounty-lists', component: SubCountiesListComponent },
  { path: 'new-subcounty', component: NewSubCountyComponent },
  { path: 'edit-subcounty', component: EditSubCountyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCountiesRoutingModule { }
