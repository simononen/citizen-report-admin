import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CivicEducationRoutingModule } from './civic-education-routing.module';
import { CivicEducationComponent } from './civic-education.component';
import { VideoMaterialsModule } from './video-materials/video-materials.module';


@NgModule({
  declarations: [CivicEducationComponent],
  imports: [
    CommonModule,
    CivicEducationRoutingModule,
    VideoMaterialsModule
  ]
})
export class CivicEducationModule { }
