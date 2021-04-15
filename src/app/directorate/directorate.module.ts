import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorateRoutingModule } from './directorate-routing.module';
import { DirectorateComponent } from './directorate.component';


@NgModule({
  declarations: [DirectorateComponent],
  imports: [
    CommonModule,
    DirectorateRoutingModule
  ]
})
export class DirectorateModule { }
