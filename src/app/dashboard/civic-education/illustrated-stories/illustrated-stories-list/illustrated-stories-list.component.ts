import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IIllustratedStory } from 'src/app/shared/interfaces/illustrated-stories/illustrated-stories';
import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import { IllustratedStoriesService } from '../_services/illustrated-stories.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-illustrated-stories-list',
  templateUrl: './illustrated-stories-list.component.html',
  styleUrls: ['./illustrated-stories-list.component.scss']
})
export class IllustratedStoriesListComponent implements OnInit {

  apiUrl = environment.apiUrl

  illustratedStories!: IIllustratedStory[];

  isLoading!: Boolean;
  errorMessage: string = '';
  illustratedStories$!: Observable<IIllustratedStory[] | any>;

  illustratedStorySearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;

  constructor(
    private fb: FormBuilder,
    private _illustratedStoriesService: IllustratedStoriesService,
  ) { }

  ngOnInit(): void {
    this.getIllustratedStories('');
    this.setUpIllustratedStorySearchForm();
  }

  setUpIllustratedStorySearchForm(): void {
    this.illustratedStorySearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  searchIllustratedStories(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/illustrated-stories?title=${searchQuery}`;
    this.getIllustratedStories(searchUrl);
  }

  clearSearch(): void {
    this.getIllustratedStories('');
    this.searchQuery?.setValue(null);
  }

  getIllustratedStories(url: string) {
    this.illustratedStories$ = this._illustratedStoriesService.getAllIllustratedStories(url).pipe(
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

  deleteIllustratedStory(id: number | string) {
    this._illustratedStoriesService.deleteIllustratedStory(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The illustrated Story record has been deleted.',
          'success'
        );
        this.getIllustratedStories('');
      },
      (err) => {

      }
    );
  }

  confirmDelete(id: string | number) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this Illustrated Story record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        this.deleteIllustratedStory(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The Illustrated Story record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.illustratedStorySearchForm.get('searchQuery');
  }

}
