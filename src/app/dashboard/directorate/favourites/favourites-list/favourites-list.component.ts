import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { FavouritesService } from '../_services/favourites.service';
import { IFavourite } from 'src/app/shared/interfaces/favourites/favourite';
import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss']
})
export class FavouritesListComponent implements OnInit {

  apiUrl = environment.apiUrl

  favourites!: IFavourite[];

  isLoading!: Boolean;
  errorMessage: string = '';
  favourites$!: Observable<IFavourite[] | any>;

  favouriteSearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _favouriteService: FavouritesService,
  ) { }

  ngOnInit(): void {
    this.getFavourites('');
    this.setUpFavouriteSearchForm();
  }

  setUpFavouriteSearchForm(): void {
    this.favouriteSearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  searchFavourites(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/favourites?parish=${searchQuery}`;
    this.getFavourites(searchUrl);
  }

  clearSearch(): void {
    this.getFavourites('');
    this.searchQuery?.setValue(null);
  }

  getFavourites(url: string) {
    this.favourites$ = this._favouriteService.getAllFavourites(url).pipe(
      tap(data => {
        this.isLoading = false;
        // @ts-ignore
        this.links = data['links'],
        // @ts-ignore
        this.meta = data['meta'],

        this.nextPageNavigation  = this.links.next;
        this.previousPageNavigation = this.links.prev;

        this.currentPage = this.meta.current_page;
        this.lastPage = this.meta.last_page;
      }),
      catchError(error => {
        this.isLoading = false;
        this.errorMessage = error;
        return of(null);
      })
    );
  }

  deleteFavourite(id: number | string) {
    this._favouriteService.deleteFavourite(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The favourite record has been deleted.',
          'success'
        );
        this.getFavourites('');
      },
      (err) => {

      }
    );
  }


  confirmDelete(id: string | number) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Favourite record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        this.deleteFavourite(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The Favourite record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.favouriteSearchForm.get('searchQuery');
  }

}
