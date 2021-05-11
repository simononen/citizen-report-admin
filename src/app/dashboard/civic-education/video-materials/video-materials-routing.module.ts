import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoMaterialsComponent } from './video-materials.component';

const routes: Routes = [{ path: '', component: VideoMaterialsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoMaterialsRoutingModule { }
