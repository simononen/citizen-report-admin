import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditLeadershipComponent } from './edit-leadership/edit-leadership.component';
import { LeadershipComponent } from './leadership.component';
import { LeadershipListComponent } from './leadership-list/leadership-list.component';
import { LeadershipRoutingModule } from './leadership-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewLeadershipComponent } from './new-leadership/new-leadership.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LeadershipComponent,
    LeadershipListComponent,
    NewLeadershipComponent,
    EditLeadershipComponent
  ],
  imports: [
    CommonModule,
    LeadershipRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LeadershipModule { }
