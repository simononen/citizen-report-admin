import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HistoryLessonService } from '../_services/history-lesson.service';
import { IHistoryLesson } from 'src/app/shared/interfaces/history-lessons/history-lesson';
import { ILink } from 'src/app/shared/interfaces/link/link';
import { IMeta } from 'src/app/shared/interfaces/meta/meta';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-history-lessons-list',
  templateUrl: './history-lessons-list.component.html',
  styleUrls: ['./history-lessons-list.component.scss']
})
export class HistoryLessonsListComponent implements OnInit {

  apiUrl = environment.apiUrl

  historyLessons!: IHistoryLesson[];

  isLoading!: Boolean;
  errorMessage: string = '';
  historyLessons$!: Observable<IHistoryLesson[] | any>;

  historyLessonSearchForm!: FormGroup

  links!: ILink;
  meta!: IMeta;

  nextPageNavigation!: string;
  previousPageNavigation!: string;

  currentPage!: number;
  lastPage!: number;
  constructor(
    private fb: FormBuilder,
    private _historyLessonService: HistoryLessonService,
  ) { }

  ngOnInit(): void {
    this.getHistoryLessons('');
    this.setUpHistoryLessonSearchForm();
  }

  setUpHistoryLessonSearchForm(): void {
    this.historyLessonSearchForm = this.fb.group({
      'searchQuery': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  searchHistoryLessons(query: FormGroup) {
    let searchQuery = query.controls.searchQuery.value;
    let searchUrl = `${this.apiUrl}/v1/history-lessons?title=${searchQuery}`;
    this.getHistoryLessons(searchUrl);
  }

  clearSearch(): void {
    this.getHistoryLessons('');
    this.searchQuery?.setValue(null);
  }

  getHistoryLessons(url: string) {
    this.historyLessons$ = this._historyLessonService.getAllHistoryLessons(url).pipe(
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

  deleteHistoryLesson(id: number | string) {
    this._historyLessonService.deleteHistoryLesson(id).subscribe(
      (res) => {
        Swal.fire(
          'Deleted!',
          'The history Lesson record has been deleted.',
          'success'
        );
        this.getHistoryLessons('');
      },
      (err) => {

      }
    );
  }
  confirmDelete(id: string | number) {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this History Lesson record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
       this.deleteHistoryLesson(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The History Lesson record is safe',
          'error'
        )
      }
    });
  }

  get searchQuery() {
    return this.historyLessonSearchForm.get('searchQuery');
  }

}
