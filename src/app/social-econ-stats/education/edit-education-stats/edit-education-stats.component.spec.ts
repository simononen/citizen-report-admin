import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationStatsComponent } from './edit-education-stats.component';

describe('EditEducationStatsComponent', () => {
  let component: EditEducationStatsComponent;
  let fixture: ComponentFixture<EditEducationStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEducationStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
