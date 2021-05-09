import { CommonModule } from '@angular/common';
import { DirectorateComponent } from './directorate.component';
import { DirectorateRoutingModule } from './directorate-routing.module';
import { DistrictModule } from './district/district.module';
import { NgModule } from '@angular/core';
import { FavouritesModule } from './favourites/favourites.module';

@NgModule({
  declarations: [DirectorateComponent],
  imports: [
    CommonModule,
    DirectorateRoutingModule,
    DistrictModule,
    FavouritesModule
  ]
})
export class DirectorateModule { }
