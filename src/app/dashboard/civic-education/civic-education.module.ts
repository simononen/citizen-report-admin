import { CivicEducationComponent } from './civic-education.component';
import { CivicEducationRoutingModule } from './civic-education-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
