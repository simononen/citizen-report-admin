import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContactInformationComponent } from './contact-information.component';
import { ContactInformationListComponent } from './contact-information-list/contact-information-list.component';
import { ContactInformationRoutingModule } from './contact-information-routing.module';
import { EditContactInformationComponent } from './edit-contact-information/edit-contact-information.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NewContactInformationComponent } from './new-contact-information/new-contact-information.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ContactInformationComponent,
    ContactInformationListComponent,
    NewContactInformationComponent,
    EditContactInformationComponent
  ],
  imports: [
    CommonModule,
    ContactInformationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ContactInformationModule { }
