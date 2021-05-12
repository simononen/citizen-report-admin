import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagesListComponent } from './villages-list.component';

describe('VillagesListComponent', () => {
  let component: VillagesListComponent;
  let fixture: ComponentFixture<VillagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
