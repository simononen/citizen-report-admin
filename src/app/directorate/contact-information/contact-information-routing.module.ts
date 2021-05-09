import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInformationComponent } from './contact-information.component';

const routes: Routes = [{ path: '', component: ContactInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactInformationRoutingModule { }
