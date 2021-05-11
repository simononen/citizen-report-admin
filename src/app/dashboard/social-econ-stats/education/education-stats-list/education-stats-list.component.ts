import { Component, OnInit } from '@angular/core';

import { EducationService } from '../_services/education.service';
import { IEducation } from 'src/app/shared/interfaces/education/education';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education-stats-list',
  templateUrl: './education-stats-list.component.html',
  styleUrls: ['./education-stats-list.component.scss']
})
export class EducationStatsListComponent implements OnInit {

  educationStats: IEducation[] = [];

  res: any;

  constructor(
    private _educationService: EducationService,
  ) { }

  ngOnInit(): void {
    this.getHealthStats();
  }

  getHealthStats() {
    this.res = this._educationService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this education record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The education record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The education record is safe',
          'error'
        )
      }
    });
  }

}
