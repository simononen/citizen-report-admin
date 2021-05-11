import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratedStoriesComponent } from './illustrated-stories.component';

describe('IllustratedStoriesComponent', () => {
  let component: IllustratedStoriesComponent;
  let fixture: ComponentFixture<IllustratedStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustratedStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
