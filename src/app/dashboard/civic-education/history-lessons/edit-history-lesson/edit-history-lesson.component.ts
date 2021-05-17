import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { DecryptService } from 'src/app/shared/services/decrypt/decrypt.service';
import { HistoryLessonService } from '../_services/history-lesson.service';
import { IHistoryLesson } from 'src/app/shared/interfaces/history-lessons/history-lesson';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-history-lesson',
  templateUrl: './edit-history-lesson.component.html',
  styleUrls: ['./edit-history-lesson.component.scss']
})
export class EditHistoryLessonComponent implements OnInit {

  historyLessonForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  historyLessons$!: Observable<IHistoryLesson[] | any>;
  historyLesson!: IHistoryLesson;
  historyLessonId!: string | number;

  districtList!: any[];

  filteredDistricts: any = '';

  public Editor = ClassicEditor;

  private routingSubscription: Subscription;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _decryptService: DecryptService,
    private _historyLessonService: HistoryLessonService,
  ) {
    this.routingSubscription = this.route.params.subscribe((params) => {
      this.historyLessonId = this._decryptService.decrypt(params['id']);
    });

    this.getHistoryLessonsById(this.historyLessonId);
   }

  ngOnInit(): void {
  }

  getHistoryLessonsById(id: number | string) {
    this.isLoading = true;
    this._historyLessonService.getHistoryLessonById(id).subscribe(
      (res) => {
        this.isLoading = false;
        this.historyLesson = res;
        this.setUpHistoryForm(this.historyLesson);
      },
      (error) => {
        this.isLoading = false;
      }
    )
  }

  setUpHistoryForm(lesson: IHistoryLesson): void {
    this.historyLessonForm = this.fb.group({
      'title': [lesson?.data?.attributes?.title ? lesson?.data?.attributes?.title : '', Validators.required],
      'description': [lesson?.data?.attributes?.description ? lesson?.data?.attributes?.description : '',''],
      'content': [lesson?.data?.attributes?.content ? lesson?.data?.attributes?.content : '',''],
      'link': [lesson?.data?.attributes?.link ? lesson?.data?.attributes?.link : '',''],
      'tag': [lesson?.data?.attributes?.tag ? lesson?.data?.attributes?.tag : '',''],
      'author': [lesson?.data?.attributes?.author ? lesson?.data?.attributes?.author : '',''],
      'showcase': [lesson?.data?.attributes?.showcase ? lesson?.data?.attributes?.showcase : false, '']
    });
  }

  onUpdateHistoryLesson(form: FormGroup) {
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
          'The History Lesson record has been updated.',
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
