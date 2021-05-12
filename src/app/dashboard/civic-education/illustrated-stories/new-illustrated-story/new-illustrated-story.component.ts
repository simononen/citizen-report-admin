import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-illustrated-story',
  templateUrl: './new-illustrated-story.component.html',
  styleUrls: ['./new-illustrated-story.component.scss']
})
export class NewIllustratedStoryComponent implements OnInit {

  illustratedStoriesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
   }

  ngOnInit(): void {
    this.setUpIllustratedStoryForm();
  }

  setUpIllustratedStoryForm(): void {
    this.illustratedStoriesForm = this.fb.group({
      'title': ['', Validators.required],
      'url': ['', Validators.required],
      'description': [''],
      'tag': [''],
      'author': [''],
      'showcase': [false, '']
    });
  }

  onSave(form: FormGroup) {
    let data = {
      'title': form.controls.title.value,
      'url': form.controls.url.value,
      'description': form.controls.description.value,
      'tag': form.controls.tag.value,
      'author': form.controls.author.value,
      'showcase': form.controls.showcase.value

    }
    console.log('Form Values ', data);
  }

  get title() {
    return this.illustratedStoriesForm.get('title');
  }

  get url() {
    return this.illustratedStoriesForm.get('url');
  }

}
