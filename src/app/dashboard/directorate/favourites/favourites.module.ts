import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditFavouritesComponent } from './edit-favourites/edit-favourites.component';
import { FavouritesComponent } from './favourites.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewFavouritesComponent } from './new-favourites/new-favourites.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FavouritesComponent,
    FavouritesListComponent,
    NewFavouritesComponent,
    EditFavouritesComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ]
})
export class FavouritesModule { }
