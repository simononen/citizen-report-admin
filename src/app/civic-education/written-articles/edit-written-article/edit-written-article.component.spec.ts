import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWrittenArticleComponent } from './edit-written-article.component';

describe('EditWrittenArticleComponent', () => {
  let component: EditWrittenArticleComponent;
  let fixture: ComponentFixture<EditWrittenArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWrittenArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWrittenArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
