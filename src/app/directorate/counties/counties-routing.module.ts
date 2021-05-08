import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountiesComponent } from './counties.component';

const routes: Routes = [{ path: '', component: CountiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountiesRoutingModule { }
