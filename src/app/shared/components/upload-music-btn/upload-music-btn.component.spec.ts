import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMusicBtnComponent } from './upload-music-btn.component';

describe('UploadMusicBtnComponent', () => {
  let component: UploadMusicBtnComponent;
  let fixture: ComponentFixture<UploadMusicBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMusicBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMusicBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
