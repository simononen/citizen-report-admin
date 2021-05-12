import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubCountyComponent } from './edit-sub-county.component';

describe('EditSubCountyComponent', () => {
  let component: EditSubCountyComponent;
  let fixture: ComponentFixture<EditSubCountyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubCountyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubCountyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
