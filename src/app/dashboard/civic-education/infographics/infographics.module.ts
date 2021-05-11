import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfographicsRoutingModule } from './infographics-routing.module';
import { InfographicsComponent } from './infographics.component';
import { InfographicListComponent } from './infographic-list/infographic-list.component';
import { InfographicDetailComponent } from './infographic-detail/infographic-detail.component';
import { NewInfographicComponent } from './new-infographic/new-infographic.component';
import { EditInfographicComponent } from './edit-infographic/edit-infographic.component';


@NgModule({
  declarations: [InfographicsComponent, InfographicListComponent, InfographicDetailComponent, NewInfographicComponent, EditInfographicComponent],
  imports: [
    CommonModule,
    InfographicsRoutingModule
  ]
})
export class InfographicsModule { }
