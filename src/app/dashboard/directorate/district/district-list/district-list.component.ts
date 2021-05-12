import { Component, OnInit } from '@angular/core';
import { IDistrict, IDistricts, IMeta } from 'src/app/shared/interfaces/district/IDistrict';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DistrictService } from '../_services/district.service';
import { ILink } from '../../../../shared/interfaces/district/IDistrict';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss']
})
export class DistrictListComponent implements OnInit {

  isLoading: Boolean = false;
  errorMessage: string = '';
  districts$!: Observable<IDistrict[] | any>;

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private _districtService: DistrictService,
  ) { }

  ngOnInit(): void {
    this.getAllDistricts('');
  }

  getAllDistricts(url: string) {

    this.districts$ = this._districtService.getAllDistricts(url).pipe(
      tap(
        data => {
          // @ts-ignore
          this.links = data['links'],
          // @ts-ignore
          this.meta = data['meta'],

          this.nextPageNavigation  = this.links.next;
          this.previousPageNavigation = this.links.prev;

          this.currentPage = this.meta.current_page;
          this.lastPage = this.meta.last_page;

          console.log('Previous ', this.previousPageNavigation);
        }
      ),
      catchError(error => {
        this.errorMessage = error;
        console.log(this.errorMessage);
        return of(null);
      }));

  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this district record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The district record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The district record is safe',
          'error'
        )
      }
    });
  }


}
