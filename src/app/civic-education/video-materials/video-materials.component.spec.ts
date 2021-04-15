import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMaterialsComponent } from './video-materials.component';

describe('VideoMaterialsComponent', () => {
  let component: VideoMaterialsComponent;
  let fixture: ComponentFixture<VideoMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
