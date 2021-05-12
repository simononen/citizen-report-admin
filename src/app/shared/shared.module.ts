import { CommonModule } from '@angular/common';
import { DashboardLoaderComponent } from './dashboard-loader/dashboard-loader.component';
import { ListLoaderComponent } from './list-loader/list-loader.component';
import { NgModule } from '@angular/core';
import { NgxContentLoadingModule } from 'ngx-content-loading';

@NgModule({
  declarations: [
    DashboardLoaderComponent,
    ListLoaderComponent
  ],
  imports: [
    CommonModule,
    NgxContentLoadingModule
  ],
  exports: [
    DashboardLoaderComponent,
    ListLoaderComponent
  ]
})
export class SharedModule { }
