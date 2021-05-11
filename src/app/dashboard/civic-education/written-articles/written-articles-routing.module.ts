import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrittenArticlesComponent } from './written-articles.component';

const routes: Routes = [{ path: '', component: WrittenArticlesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrittenArticlesRoutingModule { }
