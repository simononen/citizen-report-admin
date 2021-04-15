import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CivicEducationComponent } from './civic-education.component';

const routes: Routes = [{ path: '', component: CivicEducationComponent }, { path: 'video-materials', loadChildren: () => import('./video-materials/video-materials.module').then(m => m.VideoMaterialsModule) }, { path: 'podcasts', loadChildren: () => import('./podcasts/podcasts.module').then(m => m.PodcastsModule) }, { path: 'infographics', loadChildren: () => import('./infographics/infographics.module').then(m => m.InfographicsModule) }, { path: 'illustrsted-stories', loadChildren: () => import('./illustrated-stories/illustrated-stories.module').then(m => m.IllustratedStoriesModule) }, { path: 'history-lessons', loadChildren: () => import('./history-lessons/history-lessons.module').then(m => m.HistoryLessonsModule) }, { path: 'written-articles', loadChildren: () => import('./written-articles/written-articles.module').then(m => m.WrittenArticlesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CivicEducationRoutingModule { }
