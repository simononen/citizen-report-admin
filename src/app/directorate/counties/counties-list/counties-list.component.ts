import { Component, OnInit } from '@angular/core';

import { CountyService } from '../_services/county.service';
import { ICounty } from '../../../shared/interfaces/county/County';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-counties-list',
  templateUrl: './counties-list.component.html',
  styleUrls: ['./counties-list.component.scss']
})
export class CountiesListComponent implements OnInit {

  counties: ICounty[] = [];

  res: any;

  constructor(
    private _countiesService: CountyService,
  ) { }

  ngOnInit(): void {
    this.getCounties();
  }

  getCounties() {
    this.res = this._countiesService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this county record',
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
