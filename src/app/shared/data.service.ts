import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) {
  }

  getWebsites() {
    return this.db.collection('currentWebsites').valueChanges();
  }

  getGames() {
    return this.db.collection('currentGames').valueChanges();
  }

  getApplications() {
    return this.db.collection('currentApplications').valueChanges();
  }

  getMySkills() {
    return this.db.collection('mySkills').valueChanges();
  }

}
