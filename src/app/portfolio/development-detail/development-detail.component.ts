import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Skill } from '../../projects/projects.model';

@Component({
  selector: 'app-development-detail',
  templateUrl: './development-detail.component.html',
  styleUrls: ['./development-detail.component.css']
})
export class DevelopmentDetailComponent implements OnInit {
  mySkills: Skill[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.mySkills = [
      new Skill('Angular, Bootstrap and TypeScript', 'Advanced', 'Website', [
        {
          name: 'Lloyd in Development',
          url: 'https://lloydnicholson.github.io/LloydinDevelopment'
        },
        {
          name: 'Angular Udemy Course Project',
          url: 'https://github.com/LloydNicholson/AngularCourseUdemy'
        }
      ]),
      new Skill('JavaScript', 'Expert', 'Website', [
        {
          name: 'Kid Connect Accounting',
          url: 'https://www.kidcon.co.za'
        }
      ]),
      new Skill('Ionic', 'Advanced', 'Hybrid', [
        {
          name: 'Ionic Artist App',
          url: 'https://palota-ionic-assessment-mar2019-starter-xprrpk.stackblitz.io'
        },
        {
          name: 'Ionic Course on Udemy',
          url: 'https://github.com/LloydNicholson/ionic-course-udemy'
        }
      ]),
      new Skill('WordPress, HTML and CSS', 'Expert', 'Website', [
        {
          name: 'Lloyd in Development WordPress Website',
          url: 'https://www.lloydindevelopment.com'
        }
      ]),
      new Skill('Java', 'Beginner', 'Application', [
        {
          name: 'Tim Buchalka\'s Udemy Course',
          url: 'https://github.com/LloydNicholson/JavaLearning'
        }
      ]),
      new Skill('Git', 'Advanced', 'Website', [
        {
          name: 'Github Repository',
          url: 'https://github.com/LloydNicholson?tab=repositories'
        }
      ]),
        new Skill('Node.js', 'Advanced', 'Website')
    ];
  }

}
