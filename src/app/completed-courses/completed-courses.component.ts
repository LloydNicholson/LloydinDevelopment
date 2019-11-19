import { DataService } from '../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { CompletedCourse } from './completed-course.model';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.css']
})
export class CompletedCoursesComponent implements OnInit {
  completedCourses: CompletedCourse[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    let certificationsSub = this.dataService.getCertifications();
    certificationsSub.subscribe((certs: CompletedCourse[]) => {
      this.completedCourses = certs;
    });
  }
}
