import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;
  userDoc: AngularFirestoreDocument<IUser>;

  constructor(public afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users');
    // this.users = this.afs.collection('users').valueChanges();
    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as IUser;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getusers() {
    return this.users;
  }

  adduser(user: IUser) {
    this.usersCollection.add(user);
  }

  deleteuser(user: IUser) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  updateuser(user: IUser) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }

}
