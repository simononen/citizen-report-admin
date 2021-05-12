import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SocialEconStatsComponent } from './social-econ-stats.component';

const routes: Routes = [
  { path: '', component: SocialEconStatsComponent },
  { path: 'governance', loadChildren: () => import('./governance/governance.module').then(m => m.GovernanceModule) },
  { path: 'health', loadChildren: () => import('./health/health.module').then(m => m.HealthModule) },
  { path: 'education', loadChildren: () => import('./education/education.module').then(m => m.EducationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialEconStatsRoutingModule { }
