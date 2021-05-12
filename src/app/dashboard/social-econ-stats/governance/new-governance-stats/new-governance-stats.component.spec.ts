import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGovernanceStatsComponent } from './new-governance-stats.component';

describe('NewGovernanceStatsComponent', () => {
  let component: NewGovernanceStatsComponent;
  let fixture: ComponentFixture<NewGovernanceStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGovernanceStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGovernanceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
