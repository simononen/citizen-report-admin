import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-history-lesson',
  templateUrl: './new-history-lesson.component.html',
  styleUrls: ['./new-history-lesson.component.scss']
})
export class NewHistoryLessonComponent implements OnInit {

  historyLessonForm!: FormGroup;

  public Editor = ClassicEditor;

  constructor(
    private fb: FormBuilder,
  ) {
   }

  ngOnInit(): void {
    this.setUpHistoryForm();
  }

  setUpHistoryForm(): void {
    this.historyLessonForm = this.fb.group({
      'title': ['', Validators.required],
      'description': [''],
      'tag': [''],
      'author': [''],
      'showcase': [false, '']
    });
  }

  onSaveHistoryLesson(form: FormGroup) {
    let historyLessonData = {
      'title': form.controls.title.value,
      'description': form.controls.description.value,
      'tag': form.controls.content.value,
      'author': form.controls.author.value,
      'showcase': form.controls.showcase.value

    }
    console.log('Form Values ', historyLessonData);
  }

  get title() {
    return this.historyLessonForm.get('title');
  }

}
