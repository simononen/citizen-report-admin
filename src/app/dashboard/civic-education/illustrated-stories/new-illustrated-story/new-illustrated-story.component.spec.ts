import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIllustratedStoryComponent } from './new-illustrated-story.component';

describe('NewIllustratedStoryComponent', () => {
  let component: NewIllustratedStoryComponent;
  let fixture: ComponentFixture<NewIllustratedStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIllustratedStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIllustratedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
