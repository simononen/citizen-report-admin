import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'civic-education',
    loadChildren: () => import('./civic-education/civic-education.module').then(m => m.CivicEducationModule)
  },

  {
    path: 'directorate',
    loadChildren: () => import('./directorate/directorate.module').then(m => m.DirectorateModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  // { path: 'settings', loadChildren: () => import('./directorate/district/setting/setting.module').then(m => m.SettingModule) },

  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
