import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHeadingComponent } from './video-heading.component';

describe('VideoHeadingComponent', () => {
  let component: VideoHeadingComponent;
  let fixture: ComponentFixture<VideoHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
