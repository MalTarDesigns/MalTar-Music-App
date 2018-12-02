import { Component, OnInit } from '@angular/core';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'upload-music-btn',
  templateUrl: './upload-music-btn.component.html',
  styleUrls: ['./upload-music-btn.component.scss']
})
export class UploadMusicBtnComponent extends FileUploadComponent implements OnInit {

  constructor(
    protected storage: AngularFireStorage,
    protected db: AngularFirestore
  ) {
    super(storage, db);
  }

  ngOnInit() {
  }

}
