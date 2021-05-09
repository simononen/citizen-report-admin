import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFavouritesComponent } from './new-favourites.component';

describe('NewFavouritesComponent', () => {
  let component: NewFavouritesComponent;
  let fixture: ComponentFixture<NewFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFavouritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
