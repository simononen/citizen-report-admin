import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ILeader } from 'src/app/shared/interfaces/leader/leader';
import { ILeadership } from 'src/app/shared/interfaces/leadership/leadership';
import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import { LeadershipService } from '../_services/leadership.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-leadership-list',
  templateUrl: './leadership-list.component.html',
  styleUrls: ['./leadership-list.component.scss']
})
export class LeadershipListComponent implements OnInit {

  apiUrl = environment.apiUrl

  leaders!: ILeader[];

  isLoading!: Boolean;
  errorMessage: string = '';
  leaders$!: Observable<ILeader[] | any>;

  leaderSearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _leadershipService: LeadershipService,
  ) { }

  ngOnInit(): void {
    this.getLeaders('');
    this.setUpLeaderSearchForm();
  }

  setUpLeaderSearchForm(): void {
    this.leaderSearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  searchLeaders(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/leaders?leader=${searchQuery}`;
    this.getLeaders(searchUrl);
  }

  clearSearch(): void {
    this.getLeaders('');
    this.searchQuery?.setValue(null);
  }

  getLeaders(url: string) {
    this.leaders$ = this._leadershipService.getAllLeaders(url).pipe(
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

  deleteLeader(id: number | string) {
    this._leadershipService.deleteLeader(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The leader record has been deleted.',
          'success'
        );
        this.getLeaders('');
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
        this.deleteLeader(id);
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
    return this.leaderSearchForm.get('searchQuery');
  }

}
