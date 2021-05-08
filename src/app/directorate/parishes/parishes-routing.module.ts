import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParishesComponent } from './parishes.component';

const routes: Routes = [{ path: '', component: ParishesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParishesRoutingModule { }
