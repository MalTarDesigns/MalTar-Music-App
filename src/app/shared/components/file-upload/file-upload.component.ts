import { Component, OnDestroy, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnDestroy {
  @Input() supportedFileTypes: Array<string>;

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  private downloadURLSubscription: Subscription;
  private updateFirestoreSubscription: Subscription;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation
    const fileType = file.type.split('/')[0]
    if (!~this.supportedFileTypes.indexOf(fileType)) {
      console.error('unsupported file type :( ')
      return;
    }

    // Set the storage path
    let path;
    if (fileType === 'audio') {
      path = `audios/${new Date().getTime()}_${file.name}`;
    } else if (fileType === 'image') {
      path = `images/${new Date().getTime()}_${file.name}`;
    }

    // Totally optional metadata
    const customMetadata = { app: 'MalTar Music App!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // The file's download URL
    this.downloadURLSubscription = this.snapshot.pipe(
      finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())
    ).subscribe();

    // Save File Information in the Firestore Database
    this.updateFirestoreSubscription = this.snapshot.pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          console.log('File has been uploaded ✓');
          // Update firestore on completion
          if (fileType === 'audio') {
            this.db.collection('audios').add({ path, size: snap.totalBytes })
          } else if (fileType === 'image') {
            this.db.collection('images').add({ path, size: snap.totalBytes })
          }
        }
      })
    ).subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  ngOnDestroy() {
    if (this.downloadURLSubscription) {
      this.downloadURLSubscription.unsubscribe();
    }

    if (this.updateFirestoreSubscription) {
      this.updateFirestoreSubscription.unsubscribe();
    }
  }

}
