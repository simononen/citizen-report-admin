import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllustratedStoriesRoutingModule } from './illustrated-stories-routing.module';
import { IllustratedStoriesComponent } from './illustrated-stories.component';


@NgModule({
  declarations: [IllustratedStoriesComponent],
  imports: [
    CommonModule,
    IllustratedStoriesRoutingModule
  ]
})
export class IllustratedStoriesModule { }
