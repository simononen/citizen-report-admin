import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGovernanceStatsComponent } from './edit-governance-stats.component';

describe('EditGovernanceStatsComponent', () => {
  let component: EditGovernanceStatsComponent;
  let fixture: ComponentFixture<EditGovernanceStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGovernanceStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGovernanceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
