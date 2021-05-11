import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMaterialListComponent } from './video-material-list.component';

describe('VideoMaterialListComponent', () => {
  let component: VideoMaterialListComponent;
  let fixture: ComponentFixture<VideoMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMaterialListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
