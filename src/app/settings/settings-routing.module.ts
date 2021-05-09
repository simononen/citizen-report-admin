import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
