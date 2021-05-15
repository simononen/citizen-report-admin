import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CountyService } from '../_services/county.service';
import { ICounty } from '../../../../shared/interfaces/county/County';
import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-counties-list',
  templateUrl: './counties-list.component.html',
  styleUrls: ['./counties-list.component.scss']
})
export class CountiesListComponent implements OnInit {

  apiUrl = environment.apiUrl
  counties!: ICounty[];

  isLoading!: Boolean;
  errorMessage: string = '';
  counties$!: Observable<ICounty[] | any>;

  countySearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _countiesService: CountyService,
  ) { }

  ngOnInit(): void {
    this.getCounties('');
    this.setUpCountySearchForm();
  }

  setUpCountySearchForm(): void {
    this.countySearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  searchCounties(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/counties?county=${searchQuery}`;
    this.getCounties(searchUrl);
  }

  clearSearch(): void {
    this.getCounties('');
    this.searchQuery?.setValue(null);
  }

  getCounties(url: string) {
    this.counties$ = this._countiesService.getAllCounties(url).pipe(
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
        console.log(this.errorMessage);
        return of(null);
      })
    );
  }

  deleteCounty(id: number | string) {
    this._countiesService.deleteCounty(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The county record has been deleted.',
          'success'
        );
        this.getCounties('');
      },
      (err) => {

      }
    );
  }

  confirmDelete(id: number | string) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this county record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        this.deleteCounty(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The county record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.countySearchForm.get('searchQuery');
  }

}
