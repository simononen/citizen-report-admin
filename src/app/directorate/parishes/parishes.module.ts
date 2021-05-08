import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParishesRoutingModule } from './parishes-routing.module';
import { ParishesComponent } from './parishes.component';


@NgModule({
  declarations: [
    ParishesComponent
  ],
  imports: [
    CommonModule,
    ParishesRoutingModule
  ]
})
export class ParishesModule { }
