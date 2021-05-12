import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustratedStoriesListComponent } from './illustrated-stories-list.component';

describe('IllustratedStoriesListComponent', () => {
  let component: IllustratedStoriesListComponent;
  let fixture: ComponentFixture<IllustratedStoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustratedStoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustratedStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
