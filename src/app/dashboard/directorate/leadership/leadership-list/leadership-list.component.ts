import { Component, OnInit } from '@angular/core';

import { ILeadership } from 'src/app/shared/interfaces/leadership/leadership';
import { LeadershipService } from '../_services/leadership.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leadership-list',
  templateUrl: './leadership-list.component.html',
  styleUrls: ['./leadership-list.component.scss']
})
export class LeadershipListComponent implements OnInit {

  leadership: ILeadership[] = [];

  res: any;

  constructor(
    private _leadershipService: LeadershipService,
  ) { }

  ngOnInit(): void {
    this.getLeaderships();
  }

  getLeaderships() {
    this.res = this._leadershipService.get();

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
