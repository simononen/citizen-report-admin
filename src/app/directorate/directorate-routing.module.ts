import { RouterModule, Routes } from '@angular/router';

import { DirectorateComponent } from './directorate.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DirectorateComponent
  },
  {
    path: 'districts',
    loadChildren: () => import('./district/district.module').then(m => m.DistrictModule)
  },
  { path: 'counties', loadChildren: () => import('./counties/counties.module').then(m => m.CountiesModule) },
  { path: 'sub-counties', loadChildren: () => import('./sub-counties/sub-counties.module').then(m => m.SubCountiesModule) },
  { path: 'parishes', loadChildren: () => import('./parishes/parishes.module').then(m => m.ParishesModule) },
  { path: 'villages', loadChildren: () => import('./villages/villages.module').then(m => m.VillagesModule) },
  { path: 'favourites', loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule) },
  { path: 'contact-information', loadChildren: () => import('./contact-information/contact-information.module').then(m => m.ContactInformationModule) },
  { path: 'leadership', loadChildren: () => import('./leadership/leadership.module').then(m => m.LeadershipModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorateRoutingModule { }
