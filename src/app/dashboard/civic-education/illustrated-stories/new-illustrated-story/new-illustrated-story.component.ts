import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IIllustratedStory } from 'src/app/shared/interfaces/illustrated-stories/illustrated-stories';
import { IllustratedStoriesService } from '../_services/illustrated-stories.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-illustrated-story',
  templateUrl: './new-illustrated-story.component.html',
  styleUrls: ['./new-illustrated-story.component.scss']
})
export class NewIllustratedStoryComponent implements OnInit {

  illustratedStoriesForm!: FormGroup;

  isLoading!: Boolean;
  errorMessage: string = '';
  illustratedStories$!: Observable<IIllustratedStory[] | any>;

  districtList!: any[];

  filteredDistricts: any = '';

  constructor(
    private fb: FormBuilder,
    private _illustratedStories: IllustratedStoriesService
  ) {
   }

  ngOnInit(): void {
    this.setUpIllustratedStoryForm();
  }

  setUpIllustratedStoryForm(): void {
    this.illustratedStoriesForm = this.fb.group({
      'title': ['', Validators.required],
      'description': [''],
      'url': ['', Validators.required],
      'tag': [''],
      'author': [''],
      'showcase': [false, '']
    });
  }

  onSave(form: FormGroup) {
    let illustratedStoryData = {
      'data': {
        'type': 'illustratedstories',
        'attributes': {
          'title': form.controls.title.value,
          'description': form.controls.description.value,
          'url': form.controls.url.value,
          'tag': form.controls.tag.value,
          'author': form.controls.author.value,
          'showcase': form.controls.showcase.value
        }
      }
    }

    this._illustratedStories.addIllustratedStory(illustratedStoryData).subscribe(
      (res) => {
        this.isLoading = false;
        Swal.fire(
          'Added!',
          'The Illustrated Story record has been added.',
          'success'
        );
        this.illustratedStoriesForm.reset();
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  get title() {
    return this.illustratedStoriesForm.get('title');
  }

  get url() {
    return this.illustratedStoriesForm.get('url');
  }

}
