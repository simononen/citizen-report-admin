import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'civic-education',
        loadChildren: () => import('./civic-education/civic-education.module').then(m => m.CivicEducationModule),
      },
      {
        path: 'directorate',
        loadChildren: () => import('./directorate/directorate.module').then(m => m.DirectorateModule)
      },
      {
        path: 'social-econ-stats',
        loadChildren: () => import('./social-econ-stats/social-econ-stats.module').then(m => m.SocialEconStatsModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
