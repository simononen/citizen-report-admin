import { Component, OnInit } from '@angular/core';

import { DistrictService } from '../_services/district.service';
import { IDistrict } from 'src/app/shared/interfaces/district/IDistrict';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss']
})
export class DistrictListComponent implements OnInit {

  districts: IDistrict[] = [];

  res: any;

  constructor(
    private _districtService: DistrictService,
  ) { }

  ngOnInit(): void {
    this.getDistricts();
  }

  getDistricts() {
    this.res = this._districtService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this district record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The district record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The district record is safe',
          'error'
        )
      }
    });
  }


}
