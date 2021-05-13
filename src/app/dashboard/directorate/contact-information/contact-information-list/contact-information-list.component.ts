import { Component, OnInit } from '@angular/core';

import { ContactInformationService } from '../_services/contact-information.service';
import { IContact } from 'src/app/shared/interfaces/contact/contact';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-information-list',
  templateUrl: './contact-information-list.component.html',
  styleUrls: ['./contact-information-list.component.scss']
})
export class ContactInformationListComponent implements OnInit {

  contactInformation: IContact[] = [];

  res: any;

  constructor(
    private _contactIformationService: ContactInformationService,
  ) { }

  ngOnInit(): void {
    // this.getContactInformation();
  }

  getContactInformation() {
    this.res = this._contactIformationService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Contact record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The Contact record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The Contact record is safe',
          'error'
        )
      }
    });
  }

}
