import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParishComponent } from './edit-parish.component';

describe('EditParishComponent', () => {
  let component: EditParishComponent;
  let fixture: ComponentFixture<EditParishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
