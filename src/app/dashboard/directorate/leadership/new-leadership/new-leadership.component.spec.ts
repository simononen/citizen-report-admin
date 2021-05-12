import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeadershipComponent } from './new-leadership.component';

describe('NewLeadershipComponent', () => {
  let component: NewLeadershipComponent;
  let fixture: ComponentFixture<NewLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
