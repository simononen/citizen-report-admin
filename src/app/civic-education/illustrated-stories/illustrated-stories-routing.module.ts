import { RouterModule, Routes } from '@angular/router';

import { EditIllustratedStoryComponent } from './edit-illustrated-story/edit-illustrated-story.component';
import { IllustratedStoriesComponent } from './illustrated-stories.component';
import { IllustratedStoriesListComponent } from './illustrated-stories-list/illustrated-stories-list.component';
import { NewIllustratedStoryComponent } from './new-illustrated-story/new-illustrated-story.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: IllustratedStoriesListComponent },
  { path: 'illustrated-stories-list', component: IllustratedStoriesListComponent},
  { path: 'new-illustrated-story', component: NewIllustratedStoryComponent },
  { path: 'edit-illustrated-story', component: EditIllustratedStoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllustratedStoriesRoutingModule { }
