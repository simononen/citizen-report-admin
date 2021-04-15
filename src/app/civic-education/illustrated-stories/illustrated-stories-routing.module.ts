import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IllustratedStoriesComponent } from './illustrated-stories.component';

const routes: Routes = [{ path: '', component: IllustratedStoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllustratedStoriesRoutingModule { }
