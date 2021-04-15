import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfographicsComponent } from './infographics.component';

const routes: Routes = [{ path: '', component: InfographicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfographicsRoutingModule { }
