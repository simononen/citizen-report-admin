import { RouterModule, Routes } from '@angular/router';

import { ContactInformationComponent } from './contact-information.component';
import { ContactInformationListComponent } from './contact-information-list/contact-information-list.component';
import { EditContactInformationComponent } from './edit-contact-information/edit-contact-information.component';
import { NewContactInformationComponent } from './new-contact-information/new-contact-information.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: ContactInformationListComponent },
  { path: 'contact-information-list', component: ContactInformationListComponent},
  { path: 'new-contact-information', component: NewContactInformationComponent },
  { path: 'edit-contact-information', component: EditContactInformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactInformationRoutingModule { }
