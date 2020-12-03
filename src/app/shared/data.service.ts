import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of, Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private db: AngularFirestore) {}

  getData() {
    return of({
      websites: this.db.collection('currentWebsites').valueChanges(),
      games: this.db.collection('currentGames').valueChanges(),
      applications: this.db.collection('currentApplications').valueChanges(),
    });
  }

  getMySkills(): Observable<any[]> {
    return this.db.collection('mySkills').valueChanges();
  }

  getImages(): Observable<any[]> {
    return this.db.collection('myImages').valueChanges();
  }

  getPosts(): Observable<any[]> {
    return this.db.collection('postList').valueChanges();
  }

  getCertifications(): Observable<any[]> {
    return this.db.collection('myCertifications').valueChanges();
  }

  // if you need to add data to certifications from here
  addCerts(name: string, imageUrl: string): void {
    this.db.collection('myCertifications').add({
      name,
      imageUrl,
    });
  }
}
