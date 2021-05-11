import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVillageComponent } from './new-village.component';

describe('NewVillageComponent', () => {
  let component: NewVillageComponent;
  let fixture: ComponentFixture<NewVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
