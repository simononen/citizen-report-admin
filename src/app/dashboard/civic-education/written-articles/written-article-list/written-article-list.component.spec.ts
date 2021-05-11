import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenArticleListComponent } from './written-article-list.component';

describe('WrittenArticleListComponent', () => {
  let component: WrittenArticleListComponent;
  let fixture: ComponentFixture<WrittenArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittenArticleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
