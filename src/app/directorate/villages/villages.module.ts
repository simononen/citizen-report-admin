import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillagesRoutingModule } from './villages-routing.module';
import { VillagesComponent } from './villages.component';


@NgModule({
  declarations: [
    VillagesComponent
  ],
  imports: [
    CommonModule,
    VillagesRoutingModule
  ]
})
export class VillagesModule { }
