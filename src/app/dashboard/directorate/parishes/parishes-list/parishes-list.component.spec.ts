import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishesListComponent } from './parishes-list.component';

describe('ParishesListComponent', () => {
  let component: ParishesListComponent;
  let fixture: ComponentFixture<ParishesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParishesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
