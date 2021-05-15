import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import { IVillage } from 'src/app/shared/interfaces/village/village';
import Swal from 'sweetalert2';
import { VillageService } from '../_services/village.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-villages-list',
  templateUrl: './villages-list.component.html',
  styleUrls: ['./villages-list.component.scss']
})
export class VillagesListComponent implements OnInit {

  apiUrl = environment.apiUrl
  villages!: IVillage[];

  isLoading!: Boolean;
  errorMessage: string = '';
  villages$!: Observable<IVillage[] | any>;

  villageSearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;


  constructor(
    private fb: FormBuilder,
    private _villageService: VillageService,
  ) { }

  ngOnInit(): void {
    this.getVillages('');
    this.setUpVillageSearchForm();
  }

  setUpVillageSearchForm(): void {
    this.villageSearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  searchVillages(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/villages?county=${searchQuery}`;
    this.getVillages(searchUrl);
  }

  clearSearch(): void {
    this.getVillages('');
    this.searchQuery?.setValue(null);
  }

  getVillages(url: string) {
    this.isLoading = true;
    this.villages$ = this._villageService.getAllVillages(url).pipe(
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
    this._villageService.deleteCounty(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The village record has been deleted.',
          'success'
        );
        this.getVillages('');
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
        this.deleteCounty(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The village record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.villageSearchForm.get('searchQuery');
  }

}
