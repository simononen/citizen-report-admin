import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenArticlesComponent } from './written-articles.component';

describe('WrittenArticlesComponent', () => {
  let component: WrittenArticlesComponent;
  let fixture: ComponentFixture<WrittenArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittenArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
