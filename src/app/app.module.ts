import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EmptyStateComponent } from './shared/empty-state/empty-state.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { MaterialModule } from "./shared/material/material.module";
import { NgModule } from '@angular/core';
import { NotFoundComponentComponent } from './shared/not-found-component/not-found-component.component';
import { ToastrModule } from "ngx-toastr";
import { DashboardNavComponent } from './shared/dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyStateComponent,
    NotFoundComponentComponent,
    DashboardNavComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
