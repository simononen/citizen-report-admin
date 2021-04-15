import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenArticlesListComponent } from './written-articles-list.component';

describe('WrittenArticlesListComponent', () => {
  let component: WrittenArticlesListComponent;
  let fixture: ComponentFixture<WrittenArticlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittenArticlesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
