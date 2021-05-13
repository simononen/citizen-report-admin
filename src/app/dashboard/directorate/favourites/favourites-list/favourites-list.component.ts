import { Component, OnInit } from '@angular/core';

import { FavouritesService } from '../_services/favourites.service';
import { IFavourites } from 'src/app/shared/interfaces/favourites/favourites';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss']
})
export class FavouritesListComponent implements OnInit {

  favourites: IFavourites[] = [];

  res: any;

  constructor(
    private _favouritesService: FavouritesService,
  ) { }

  ngOnInit(): void {
    // this.getFavourites();
  }

  getFavourites() {
    this.res = this._favouritesService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Favourite record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The Favourite record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The Favourite record is safe',
          'error'
        )
      }
    });
  }

}
