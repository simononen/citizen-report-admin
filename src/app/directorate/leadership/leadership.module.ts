import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadershipRoutingModule } from './leadership-routing.module';
import { LeadershipComponent } from './leadership.component';


@NgModule({
  declarations: [
    LeadershipComponent
  ],
  imports: [
    CommonModule,
    LeadershipRoutingModule
  ]
})
export class LeadershipModule { }
