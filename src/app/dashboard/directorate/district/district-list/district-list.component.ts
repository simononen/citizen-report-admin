import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDistrict, IDistricts, IMeta } from 'src/app/shared/interfaces/district/IDistrict';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DistrictService } from '../_services/district.service';
import { ILink } from '../../../../shared/interfaces/district/IDistrict';
import Swal from 'sweetalert2'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss']
})
export class DistrictListComponent implements OnInit {

  apiUrl = environment.apiUrl

  isLoading!: Boolean;
  errorMessage: string = '';
  districts$!: Observable<IDistrict[] | any>;

  districtSearchForm!: FormGroup;

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _districtService: DistrictService,
  ) { }

  ngOnInit(): void {
    this.getAllDistricts('');
    this.setUpDistrictSearchForm();
  }

  setUpDistrictSearchForm(): void {
    this.districtSearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  searchDistricts(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/districts?district=${searchQuery}`;
    this.getAllDistricts(searchUrl);
  }

  clearSearch(): void {
    this.getAllDistricts('');
    this.searchQuery?.setValue(null);
  }

  getAllDistricts(url: string) {
    this.isLoading = true;
    this.districts$ = this._districtService.getAllDistricts(url).pipe(
      tap(
        data => {
          this.isLoading = false;
          // @ts-ignore
          this.links = data['links'],
          // @ts-ignore
          this.meta = data['meta'],

          this.nextPageNavigation  = this.links.next;
          this.previousPageNavigation = this.links.prev;

          this.currentPage = this.meta.current_page;
          this.lastPage = this.meta.last_page;
        }
      ),
      catchError(error => {
        this.isLoading = false;
        this.errorMessage = error;
        console.log(this.errorMessage);
        return of(null);
      }));
  }
  deleteDistrict(id: number | string) {
    this._districtService.deleteDistrict(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The district record has been deleted.',
          'success'
        );
        this.getAllDistricts('');
      },
      (err) => {

      }
    );
  }

  confirmDelete(id: number | string) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this district record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        this.deleteDistrict(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The district record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.districtSearchForm.get('searchQuery');
  }


}
