import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodcastsRoutingModule } from './podcasts-routing.module';
import { PodcastsComponent } from './podcasts.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { NewPodcastComponent } from './new-podcast/new-podcast.component';
import { EditPodcastComponent } from './edit-podcast/edit-podcast.component';


@NgModule({
  declarations: [PodcastsComponent, PodcastListComponent, PodcastDetailComponent, NewPodcastComponent, EditPodcastComponent],
  imports: [
    CommonModule,
    PodcastsRoutingModule
  ]
})
export class PodcastsModule { }
