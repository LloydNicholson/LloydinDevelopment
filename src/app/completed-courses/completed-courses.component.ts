import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.css']
})
export class CompletedCoursesComponent implements OnInit {
  completedCourses = [
    { name: 'Angular Styling', url: '../../../assets/img/angular-styling-certificate-udemy.jpg' },
    { name: 'Angular 7 - Comprehensive Course', url: '../../../assets/img/comprehensive-angular-7-certificate.jpg' },
    { name: 'Java Programming Basics', url: '../../../assets/img/java-programming-basics-udemy.jpg' },
    {
      name: 'AngularFire, Angular Material and NgRx',
      url: '../../../assets/img/angular-material-course-certificate.jpg'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
