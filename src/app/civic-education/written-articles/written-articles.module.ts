import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrittenArticlesRoutingModule } from './written-articles-routing.module';
import { WrittenArticlesComponent } from './written-articles.component';
import { WrittenArticleListComponent } from './written-article-list/written-article-list.component';
import { WrittenArticlesListComponent } from './written-articles-list/written-articles-list.component';
import { WrittenArticleDetailComponent } from './written-article-detail/written-article-detail.component';
import { NewWrittenArticleComponent } from './new-written-article/new-written-article.component';
import { EditWrittenArticleComponent } from './edit-written-article/edit-written-article.component';


@NgModule({
  declarations: [WrittenArticlesComponent, WrittenArticleListComponent, WrittenArticlesListComponent, WrittenArticleDetailComponent, NewWrittenArticleComponent, EditWrittenArticleComponent],
  imports: [
    CommonModule,
    WrittenArticlesRoutingModule
  ]
})
export class WrittenArticlesModule { }
