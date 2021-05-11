import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHealthStatsComponent } from './new-health-stats.component';

describe('NewHealthStatsComponent', () => {
  let component: NewHealthStatsComponent;
  let fixture: ComponentFixture<NewHealthStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHealthStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHealthStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
