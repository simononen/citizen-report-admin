import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import { IParish } from 'src/app/shared/interfaces/parish/parish';
import { IVillage } from '../../../../shared/interfaces/village/village';
import { ParishService } from '../_services/parish.service';
import Swal from 'sweetalert2';
import { VillageService } from '../../villages/_services/village.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-parishes-list',
  templateUrl: './parishes-list.component.html',
  styleUrls: ['./parishes-list.component.scss']
})
export class ParishesListComponent implements OnInit {

  apiUrl = environment.apiUrl

  parishes!: IParish[];

  isLoading!: Boolean;
  errorMessage: string = '';
  parishes$!: Observable<IParish[] | any>;

  parishSearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _parishService: ParishService,
  ) { }

  ngOnInit(): void {
    this.getParishes('');
    this.setUpParishSearchForm();
  }

  setUpParishSearchForm(): void {
    this.parishSearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  searchParishes(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/parishes?parish=${searchQuery}`;
    this.getParishes(searchUrl);
  }

  clearSearch(): void {
    this.getParishes('');
    this.searchQuery?.setValue(null);
  }

  getParishes(url: string) {
    this.parishes$ = this._parishService.getAllParishes(url).pipe(
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

  deleteCounty(id: number | string) {
    this._parishService.deleteParish(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The parish record has been deleted.',
          'success'
        );
        this.getParishes('');
      },
      (err) => {

      }
    );
  }

  deleteParish(id: number | string) {
    this._parishService.deleteParish(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The parish record has been deleted.',
          'success'
        );
        this.getParishes('');
      },
      (err) => {

      }
    );
  }


  confirmDelete(id: string | number) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Parish record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        this.deleteParish(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The parish record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.parishSearchForm.get('searchQuery');
  }

}
