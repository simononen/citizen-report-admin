import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HistoryLessonService } from '../_services/history-lesson.service';
import { IHistoryLesson } from 'src/app/shared/interfaces/history-lessons/history-lesson';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-history-lesson',
  templateUrl: './new-history-lesson.component.html',
  styleUrls: ['./new-history-lesson.component.scss']
})
export class NewHistoryLessonComponent implements OnInit {

  historyLessonForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  historyLessons$!: Observable<IHistoryLesson[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  public Editor = ClassicEditor;

  constructor(
    private fb: FormBuilder,
    private _historyLessonService: HistoryLessonService,
  ) {
   }

  ngOnInit(): void {
    this.setUpHistoryForm();
  }

  setUpHistoryForm(): void {
    this.historyLessonForm = this.fb.group({
      'title': ['', Validators.required],
      'description': [''],
      'content': [''],
      'link': [''],
      'tag': [''],
      'author': [''],
      'showcase': [false, '']
    });
  }

  onSaveHistoryLesson(form: FormGroup) {
    let historyLessonData = {
      'data' : {
        'type': 'historylessons',
        'attributes': {
          'title': form.controls.title.value,
          'description': form.controls.description.value,
          'content': form.controls.content.value,
          'link': form.controls.link.value,
          'tag': form.controls.tag.value,
          'author': form.controls.author.value,
          'showcase': form.controls.showcase.value
        }
      }
    }

    this._historyLessonService.addHistoryLesson(historyLessonData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The History Lesson record has been added.',
          'success'
        );
        this.historyLessonForm.reset();
      },
      (error) => {
        this.isLoading = false;
      }
    );

  }

  get title() {
    return this.historyLessonForm.get('title');
  }

}
