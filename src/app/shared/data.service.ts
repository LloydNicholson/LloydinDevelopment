import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient, private db: AngularFirestore) {
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
