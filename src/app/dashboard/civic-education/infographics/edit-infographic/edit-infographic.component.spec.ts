import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfographicComponent } from './edit-infographic.component';

describe('EditInfographicComponent', () => {
  let component: EditInfographicComponent;
  let fixture: ComponentFixture<EditInfographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInfographicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
