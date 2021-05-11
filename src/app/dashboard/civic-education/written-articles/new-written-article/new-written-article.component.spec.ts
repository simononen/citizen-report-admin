import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWrittenArticleComponent } from './new-written-article.component';

describe('NewWrittenArticleComponent', () => {
  let component: NewWrittenArticleComponent;
  let fixture: ComponentFixture<NewWrittenArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWrittenArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWrittenArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
