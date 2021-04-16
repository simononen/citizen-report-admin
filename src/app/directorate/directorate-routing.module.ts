import { RouterModule, Routes } from '@angular/router';

import { DirectorateComponent } from './directorate.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: DirectorateComponent }, { path: 'districts', loadChildren: () => import('./district/district.module').then(m => m.DistrictModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorateRoutingModule { }
