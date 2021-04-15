import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfographicComponent } from './new-infographic.component';

describe('NewInfographicComponent', () => {
  let component: NewInfographicComponent;
  let fixture: ComponentFixture<NewInfographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInfographicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInfographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
