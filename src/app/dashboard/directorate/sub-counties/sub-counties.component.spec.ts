import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCountiesComponent } from './sub-counties.component';

describe('SubCountiesComponent', () => {
  let component: SubCountiesComponent;
  let fixture: ComponentFixture<SubCountiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCountiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
