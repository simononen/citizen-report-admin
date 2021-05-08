import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCountiesRoutingModule } from './sub-counties-routing.module';
import { SubCountiesComponent } from './sub-counties.component';


@NgModule({
  declarations: [
    SubCountiesComponent
  ],
  imports: [
    CommonModule,
    SubCountiesRoutingModule
  ]
})
export class SubCountiesModule { }
