import { RouterModule, Routes } from '@angular/router';

import { EditFavouritesComponent } from './edit-favourites/edit-favourites.component';
import { FavouritesComponent } from './favourites.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { NewFavouritesComponent } from './new-favourites/new-favourites.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: FavouritesListComponent },
  { path: 'favourites-list', component: FavouritesListComponent},
  { path: 'new-favourite', component: NewFavouritesComponent },
  { path: 'edit-favourite/:id', component: EditFavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouritesRoutingModule { }
