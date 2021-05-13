import { Component, OnInit } from '@angular/core';

import { IParish } from 'src/app/shared/interfaces/parish/parish';
import { IVillage } from '../../../../shared/interfaces/village/village';
import { ParishService } from '../_services/parish.service';
import Swal from 'sweetalert2';
import { VillageService } from '../../villages/_services/village.service';

@Component({
  selector: 'app-parishes-list',
  templateUrl: './parishes-list.component.html',
  styleUrls: ['./parishes-list.component.scss']
})
export class ParishesListComponent implements OnInit {

  parishes: IParish[] = [];

  res: any;

  constructor(
    private _parishService: ParishService,
  ) { }

  ngOnInit(): void {
    // this.getParishes();
  }

  getParishes() {
    this.res = this._parishService.get();

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
