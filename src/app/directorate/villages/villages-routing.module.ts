import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillagesComponent } from './villages.component';

const routes: Routes = [{ path: '', component: VillagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillagesRoutingModule { }
