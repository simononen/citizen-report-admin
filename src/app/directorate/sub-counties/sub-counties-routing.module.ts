import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCountiesComponent } from './sub-counties.component';

const routes: Routes = [{ path: '', component: SubCountiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCountiesRoutingModule { }
