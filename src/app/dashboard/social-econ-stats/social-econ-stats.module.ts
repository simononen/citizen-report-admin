import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialEconStatsRoutingModule } from './social-econ-stats-routing.module';
import { SocialEconStatsComponent } from './social-econ-stats.component';


@NgModule({
  declarations: [
    SocialEconStatsComponent
  ],
  imports: [
    CommonModule,
    SocialEconStatsRoutingModule
  ]
})
export class SocialEconStatsModule { }
