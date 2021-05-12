import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenArticleDetailComponent } from './written-article-detail.component';

describe('WrittenArticleDetailComponent', () => {
  let component: WrittenArticleDetailComponent;
  let fixture: ComponentFixture<WrittenArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittenArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
