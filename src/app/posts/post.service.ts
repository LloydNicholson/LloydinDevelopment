import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private db: AngularFirestore) {
  }

  getPosts() {
    return this.db.collection('postList').valueChanges();
  }
}
