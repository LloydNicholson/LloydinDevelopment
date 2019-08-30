import { DataService } from './../shared/data.service';
import { CollectionReference, AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.css']
})
export class CompletedCoursesComponent implements OnInit {
  completedCourses = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    let certificationsSub = this.dataService.getCertifications();
    certificationsSub.subscribe(certs => {
      this.completedCourses = certs;
    });
  }
}
