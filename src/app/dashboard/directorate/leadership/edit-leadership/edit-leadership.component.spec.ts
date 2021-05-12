import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeadershipComponent } from './edit-leadership.component';

describe('EditLeadershipComponent', () => {
  let component: EditLeadershipComponent;
  let fixture: ComponentFixture<EditLeadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeadershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
