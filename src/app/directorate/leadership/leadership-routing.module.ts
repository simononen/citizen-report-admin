import { RouterModule, Routes } from '@angular/router';

import { EditLeadershipComponent } from './edit-leadership/edit-leadership.component';
import { LeadershipComponent } from './leadership.component';
import { LeadershipListComponent } from './leadership-list/leadership-list.component';
import { NewLeadershipComponent } from './new-leadership/new-leadership.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LeadershipListComponent },
  { path: 'leadership-list', component: LeadershipListComponent},
  { path: 'new-leadership', component: NewLeadershipComponent },
  { path: 'edit-leadership', component: EditLeadershipComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadershipRoutingModule { }
