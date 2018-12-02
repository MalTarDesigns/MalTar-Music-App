import { Component, OnInit } from '@angular/core';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'upload-image-btn',
  templateUrl: './upload-image-btn.component.html',
  styleUrls: ['./upload-image-btn.component.scss']
})
export class UploadImageBtnComponent extends FileUploadComponent implements OnInit {

  constructor(
    protected storage: AngularFireStorage,
    protected db: AngularFirestore
  ) {
    super(storage, db);
  }

  ngOnInit() {
  }

}
