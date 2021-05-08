import { Component, OnInit } from '@angular/core';

import { ISubcounty } from 'src/app/shared/interfaces/subcounty/Subcounty';
import { SubCountiesService } from '../_services/sub-counties.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sub-counties-list',
  templateUrl: './sub-counties-list.component.html',
  styleUrls: ['./sub-counties-list.component.scss']
})
export class SubCountiesListComponent implements OnInit {

  subcounties: ISubcounty[] = [];

  res: any;

  constructor(
    private _subCountyService: SubCountiesService,
  ) { }

  ngOnInit(): void {
    this.getSubcounties();
  }

  getSubcounties() {
    this.res = this._subCountyService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this subcounty record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The subcounty record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The subcounty record is safe',
          'error'
        )
      }
    });
  }

}
