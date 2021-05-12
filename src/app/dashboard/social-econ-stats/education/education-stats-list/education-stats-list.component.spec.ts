import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationStatsListComponent } from './education-stats-list.component';

describe('EducationStatsListComponent', () => {
  let component: EducationStatsListComponent;
  let fixture: ComponentFixture<EducationStatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationStatsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
