import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivicEducationComponent } from './civic-education.component';

describe('CivicEducationComponent', () => {
  let component: CivicEducationComponent;
  let fixture: ComponentFixture<CivicEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivicEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivicEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
