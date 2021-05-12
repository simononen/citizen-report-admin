import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEducationStatsComponent } from './new-education-stats.component';

describe('NewEducationStatsComponent', () => {
  let component: NewEducationStatsComponent;
  let fixture: ComponentFixture<NewEducationStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEducationStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEducationStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
