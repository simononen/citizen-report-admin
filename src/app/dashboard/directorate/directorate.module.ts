import { CommonModule } from '@angular/common';
import { DashboardLoaderComponent } from 'src/app/shared/dashboard-loader/dashboard-loader.component';
import { DirectorateComponent } from './directorate.component';
import { DirectorateRoutingModule } from './directorate-routing.module';
import { DistrictModule } from './district/district.module';
import { FavouritesModule } from './favourites/favourites.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

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
