import { CommonModule } from '@angular/common';
import { DashboardLoaderComponent } from './dashboard-loader/dashboard-loader.component';
import { NgModule } from '@angular/core';
import { NgxContentLoadingModule } from 'ngx-content-loading';

@NgModule({
  declarations: [
    DashboardLoaderComponent
  ],
  imports: [
    CommonModule,
    NgxContentLoadingModule
  ],
  exports: [
    DashboardLoaderComponent
  ]
})
export class SharedModule { }
