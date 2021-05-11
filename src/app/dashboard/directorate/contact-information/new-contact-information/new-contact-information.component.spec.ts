import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactInformationComponent } from './new-contact-information.component';

describe('NewContactInformationComponent', () => {
  let component: NewContactInformationComponent;
  let fixture: ComponentFixture<NewContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
