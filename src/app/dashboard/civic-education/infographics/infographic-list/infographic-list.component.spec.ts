import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicListComponent } from './infographic-list.component';

describe('InfographicListComponent', () => {
  let component: InfographicListComponent;
  let fixture: ComponentFixture<InfographicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfographicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
