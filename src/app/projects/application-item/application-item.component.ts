import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../projects.model';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent implements OnInit {
  @Input() app: Application;

  constructor() {
  }

  ngOnInit() {
  }

}
