import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIllustratedStoryComponent } from './edit-illustrated-story.component';

describe('EditIllustratedStoryComponent', () => {
  let component: EditIllustratedStoryComponent;
  let fixture: ComponentFixture<EditIllustratedStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIllustratedStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIllustratedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
