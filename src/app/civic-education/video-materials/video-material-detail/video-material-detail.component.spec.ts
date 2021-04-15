import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMaterialDetailComponent } from './video-material-detail.component';

describe('VideoMaterialDetailComponent', () => {
  let component: VideoMaterialDetailComponent;
  let fixture: ComponentFixture<VideoMaterialDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMaterialDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMaterialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
