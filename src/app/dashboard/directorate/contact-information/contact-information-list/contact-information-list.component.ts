import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ContactInformationService } from '../_services/contact-information.service';
import { IContact } from 'src/app/shared/interfaces/contact/contact';
import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-information-list',
  templateUrl: './contact-information-list.component.html',
  styleUrls: ['./contact-information-list.component.scss']
})
export class ContactInformationListComponent implements OnInit {
  apiUrl = environment.apiUrl

  contactInformation!: IContact[];

  isLoading!: Boolean;
  errorMessage: string = '';
  contacts$!: Observable<IContact[] | any>;

  contactSearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _contactIformationService: ContactInformationService,
  ) { }

  ngOnInit(): void {
    this.getContacts('');
    this.setUpContactSearchForm();
  }

  setUpContactSearchForm(): void {
    this.contactSearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  searchContacts(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/contacts?contact=${searchQuery}`;
    this.getContacts(searchUrl);
  }

  clearSearch(): void {
    this.getContacts('');
    this.searchQuery?.setValue(null);
  }

  getContacts(url: string) {
    this.contacts$ = this._contactIformationService.getAllContacts(url).pipe(
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

  deleteContact(id: number | string) {
    this._contactIformationService.deleteContact(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The contact record has been deleted.',
          'success'
        );
        this.getContacts('');
      },
      (err) => {

      }
    );
  }

  confirmDelete(id: string | number) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Contact record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        this.deleteContact(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The Contact record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.contactSearchForm.get('searchQuery');
  }

}
