import { CommonModule } from '@angular/common';
import { DashboardLoaderComponent } from './dashboard-loader/dashboard-loader.component';
import { EncryptPipe } from './pipes/encrypt/encrypt.pipe';
import { ListLoaderComponent } from './list-loader/list-loader.component';
import { NgModule } from '@angular/core';
import { NgxContentLoadingModule } from 'ngx-content-loading';
@NgModule({
  declarations: [
    DashboardLoaderComponent,
    ListLoaderComponent,
    EncryptPipe,
  ],
  imports: [
    CommonModule,
    NgxContentLoadingModule
  ],
  exports: [
    DashboardLoaderComponent,
    ListLoaderComponent,
    EncryptPipe
  ]
})
export class SharedModule { }
