import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStatsListComponent } from './health-stats-list.component';

describe('HealthStatsListComponent', () => {
  let component: HealthStatsListComponent;
  let fixture: ComponentFixture<HealthStatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthStatsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
