import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) {
  }

  getData() {
    return of({
      websites: this.db.collection('currentWebsites').valueChanges(),
      games: this.db.collection('currentGames').valueChanges(),
      applications: this.db.collection('currentApplications').valueChanges()
    });
  }

  getMySkills() {
    return this.db.collection('mySkills').valueChanges();
  }

  getImages() {
    return this.db.collection('myImages').valueChanges();
  }

  getPosts() {
    return this.db.collection('postList').valueChanges();
  }
}
