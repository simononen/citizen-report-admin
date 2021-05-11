import { Component, OnInit } from '@angular/core';

import { GovernanceService } from '../_services/governance.service';
import { IGovernanace } from 'src/app/shared/interfaces/governance/governance';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-governance-stats-list',
  templateUrl: './governance-stats-list.component.html',
  styleUrls: ['./governance-stats-list.component.scss']
})
export class GovernanceStatsListComponent implements OnInit {

  governanceStats: IGovernanace[] = [];

  res: any;

  constructor(
    private _governanceService: GovernanceService,
  ) { }

  ngOnInit(): void {
    this.getGovernanceStats();
  }

  getGovernanceStats() {
    this.res = this._governanceService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this governance record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The governance record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The governance record is safe',
          'error'
        )
      }
    });
  }

}
