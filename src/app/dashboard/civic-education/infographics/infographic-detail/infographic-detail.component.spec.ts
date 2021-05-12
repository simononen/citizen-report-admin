import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicDetailComponent } from './infographic-detail.component';

describe('InfographicDetailComponent', () => {
  let component: InfographicDetailComponent;
  let fixture: ComponentFixture<InfographicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfographicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
