import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubCountyComponent } from './new-sub-county.component';

describe('NewSubCountyComponent', () => {
  let component: NewSubCountyComponent;
  let fixture: ComponentFixture<NewSubCountyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSubCountyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
