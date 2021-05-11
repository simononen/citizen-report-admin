import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEconStatsComponent } from './social-econ-stats.component';

describe('SocialEconStatsComponent', () => {
  let component: SocialEconStatsComponent;
  let fixture: ComponentFixture<SocialEconStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEconStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialEconStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
