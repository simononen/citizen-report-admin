import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCountyComponent } from './new-county.component';

describe('NewCountyComponent', () => {
  let component: NewCountyComponent;
  let fixture: ComponentFixture<NewCountyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCountyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
