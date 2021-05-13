import { Component, OnInit } from '@angular/core';

import { HistoryLessonService } from '../_services/history-lesson.service';
import { IHistoryLesson } from 'src/app/shared/interfaces/history-lessons/history-lesson';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-history-lessons-list',
  templateUrl: './history-lessons-list.component.html',
  styleUrls: ['./history-lessons-list.component.scss']
})
export class HistoryLessonsListComponent implements OnInit {

  historyLessons: IHistoryLesson[] = [];

  res: any;

  constructor(
    private _historyLessonService: HistoryLessonService,
  ) { }

  ngOnInit(): void {
    // this.getHistoryLessons();
  }

  getHistoryLessons() {
    this.res = this._historyLessonService.get();

    console.log('Response ', this.res);
  }

  confirmDelete() {
    Swal.fire({
      title: 'Are you sure want to delete?',
      text: 'You will not be able to recover this History Lesson record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel'
    }).then((result: any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'The History Lesson record has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The History Lesson record is safe',
          'error'
        )
      }
    });
  }

}
