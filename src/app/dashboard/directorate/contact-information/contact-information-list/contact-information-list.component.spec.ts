import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInformationListComponent } from './contact-information-list.component';

describe('ContactInformationListComponent', () => {
  let component: ContactInformationListComponent;
  let fixture: ComponentFixture<ContactInformationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInformationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
