import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountiesRoutingModule } from './counties-routing.module';
import { CountiesComponent } from './counties.component';


@NgModule({
  declarations: [
    CountiesComponent
  ],
  imports: [
    CommonModule,
    CountiesRoutingModule
  ]
})
export class CountiesModule { }
