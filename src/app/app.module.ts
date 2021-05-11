import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardNavComponent } from './shared/dashboard-nav/dashboard-nav.component';
import { EmptyStateComponent } from './shared/empty-state/empty-state.component';
import { HttpInterceptorService } from "./shared/services/http-interceptor/http-interceptor.service";
import { LoginComponent } from './auth/login/login.component';
import { MaterialModule } from "./shared/material/material.module";
import { NgModule } from '@angular/core';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { NotFoundComponentComponent } from './shared/not-found-component/not-found-component.component';
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    EmptyStateComponent,
    NotFoundComponentComponent,
    DashboardNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
