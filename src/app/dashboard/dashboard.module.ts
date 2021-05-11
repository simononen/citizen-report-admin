import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
