import { CommonModule } from '@angular/common';
import { EditVideoMaterialComponent } from './edit-video-material/edit-video-material.component';
import { NewVideoMaterialComponent } from './new-video-material/new-video-material.component';
import { NgModule } from '@angular/core';
import { VideoMaterialDetailComponent } from './video-material-detail/video-material-detail.component';
import { VideoMaterialListComponent } from './video-material-list/video-material-list.component';
import { VideoMaterialsComponent } from './video-materials.component';
import { VideoMaterialsRoutingModule } from './video-materials-routing.module';

@NgModule({
  declarations: [VideoMaterialsComponent, VideoMaterialListComponent, VideoMaterialDetailComponent, NewVideoMaterialComponent, EditVideoMaterialComponent],
  imports: [
    CommonModule,
    VideoMaterialsRoutingModule
  ]
})
export class VideoMaterialsModule { }
