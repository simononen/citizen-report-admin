import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHealthStatsComponent } from './edit-health-stats.component';

describe('EditHealthStatsComponent', () => {
  let component: EditHealthStatsComponent;
  let fixture: ComponentFixture<EditHealthStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHealthStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHealthStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
