import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipListComponent } from './leadership-list.component';

describe('LeadershipListComponent', () => {
  let component: LeadershipListComponent;
  let fixture: ComponentFixture<LeadershipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
