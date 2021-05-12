import { Component, OnInit } from '@angular/core';

import { IIllustratedStories } from 'src/app/shared/interfaces/illustrated-stories/illustrated-stories';
import { IllustratedStoriesService } from '../_services/illustrated-stories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-illustrated-stories-list',
  templateUrl: './illustrated-stories-list.component.html',
  styleUrls: ['./illustrated-stories-list.component.scss']
})
export class IllustratedStoriesListComponent implements OnInit {

  illustratedStories: IIllustratedStories[] = [];

  res: any;

  constructor(
    private _illustratedStoriesService: IllustratedStoriesService,
  ) { }

  ngOnInit(): void {
    this.getIllustratedStories();
  }

  getIllustratedStories() {
    this.res = this._illustratedStoriesService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Illustrated Story record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The Illustrated Story record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The Illustrated Story record is safe',
          'error'
        )
      }
    });
  }

}
