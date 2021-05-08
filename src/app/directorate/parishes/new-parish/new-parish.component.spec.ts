import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParishComponent } from './new-parish.component';

describe('NewParishComponent', () => {
  let component: NewParishComponent;
  let fixture: ComponentFixture<NewParishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewParishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewParishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
