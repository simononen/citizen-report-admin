import { Component, OnInit } from '@angular/core';

import { HealthService } from '../_services/health.service';
import { IHealth } from 'src/app/shared/interfaces/health/health';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-health-stats-list',
  templateUrl: './health-stats-list.component.html',
  styleUrls: ['./health-stats-list.component.scss']
})
export class HealthStatsListComponent implements OnInit {

  healthStats: IHealth[] = [];

  res: any;

  constructor(
    private _healthService: HealthService,
  ) { }

  ngOnInit(): void {
    this.getHealthStats();
  }

  getHealthStats() {
    this.res = this._healthService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this health record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The health record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The health record is safe',
          'error'
        )
      }
    });
  }

}
