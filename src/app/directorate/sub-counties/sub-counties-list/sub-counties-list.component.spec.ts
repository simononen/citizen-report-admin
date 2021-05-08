import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCountiesListComponent } from './sub-counties-list.component';

describe('SubCountiesListComponent', () => {
  let component: SubCountiesListComponent;
  let fixture: ComponentFixture<SubCountiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCountiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCountiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
