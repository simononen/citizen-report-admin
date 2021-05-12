import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernanceStatsListComponent } from './governance-stats-list.component';

describe('GovernanceStatsListComponent', () => {
  let component: GovernanceStatsListComponent;
  let fixture: ComponentFixture<GovernanceStatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernanceStatsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernanceStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
