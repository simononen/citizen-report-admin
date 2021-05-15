import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import { ISubcounty } from 'src/app/shared/interfaces/subcounty/Subcounty';
import { SubSubcountiesService } from '../_services/sub-counties.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-counties-list',
  templateUrl: './sub-counties-list.component.html',
  styleUrls: ['./sub-counties-list.component.scss']
})
export class SubCountiesListComponent implements OnInit {

  apiUrl = environment.apiUrl

  subcounties!: ISubcounty[];

  isLoading!: Boolean;
  errorMessage: string = '';
  subcounties$!: Observable<ISubcounty[] | any>;

  subcountySearchForm!: FormGroup;

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _subCountyService: SubSubcountiesService
  ) { }

  ngOnInit(): void {
    this.getSubcounties('');
    this.setUpSubcountySearchForm();
  }

  setUpSubcountySearchForm(): void {
    this.subcountySearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  searchSubCounties(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/sub-counties?subcounty=${searchQuery}`;
    this.getSubcounties(searchUrl);
  }

  clearSearch(): void {
    this.getSubcounties('');
    this.searchQuery?.setValue(null);
  }

  getSubcounties(url: string) {
    this.subcounties$ = this._subCountyService.getAllSubcounties(url).pipe(
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
    this._subCountyService.deleteSubcounty(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The sub county record has been deleted.',
          'success'
        );
        this.getSubcounties('');
      },
      (err) => {

      }
    );
  }

  confirmDelete(id: string) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this subcounty record',
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
          'The subcounty record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.subcountySearchForm.get('searchQuery');
  }

}
