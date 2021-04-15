import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorateComponent } from './directorate.component';

const routes: Routes = [{ path: '', component: DirectorateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorateRoutingModule { }
