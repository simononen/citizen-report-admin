import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVideoMaterialComponent } from './new-video-material.component';

describe('NewVideoMaterialComponent', () => {
  let component: NewVideoMaterialComponent;
  let fixture: ComponentFixture<NewVideoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVideoMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVideoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
