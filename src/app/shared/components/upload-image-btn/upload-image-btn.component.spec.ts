import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageBtnComponent } from './upload-image-btn.component';

describe('UploadImageBtnComponent', () => {
  let component: UploadImageBtnComponent;
  let fixture: ComponentFixture<UploadImageBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
