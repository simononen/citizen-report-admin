import { Component, OnInit } from '@angular/core';

import { IVillage } from 'src/app/shared/interfaces/village/village';
import Swal from 'sweetalert2';
import { VillageService } from '../_services/village.service';

@Component({
  selector: 'app-villages-list',
  templateUrl: './villages-list.component.html',
  styleUrls: ['./villages-list.component.scss']
})
export class VillagesListComponent implements OnInit {

  villages: IVillage[] = [];

  res: any;

  constructor(
    private _villageService: VillageService,
  ) { }

  ngOnInit(): void {
    this.getVillages();
  }

  getVillages() {
    this.res = this._villageService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Parish record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The county record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The county record is safe',
          'error'
        )
      }
    });
  }

}
