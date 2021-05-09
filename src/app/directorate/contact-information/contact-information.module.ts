import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactInformationRoutingModule } from './contact-information-routing.module';
import { ContactInformationComponent } from './contact-information.component';


@NgModule({
  declarations: [
    ContactInformationComponent
  ],
  imports: [
    CommonModule,
    ContactInformationRoutingModule
  ]
})
export class ContactInformationModule { }
