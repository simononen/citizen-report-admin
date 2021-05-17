import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditIllustratedStoryComponent } from './edit-illustrated-story/edit-illustrated-story.component';
import { IllustratedStoriesComponent } from './illustrated-stories.component';
import { IllustratedStoriesListComponent } from './illustrated-stories-list/illustrated-stories-list.component';
import { IllustratedStoriesRoutingModule } from './illustrated-stories-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewIllustratedStoryComponent } from './new-illustrated-story/new-illustrated-story.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [IllustratedStoriesComponent, IllustratedStoriesListComponent, NewIllustratedStoryComponent, EditIllustratedStoryComponent],
  imports: [
    CommonModule,
    IllustratedStoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ]
})
export class IllustratedStoriesModule { }
