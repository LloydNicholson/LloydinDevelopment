import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slideInUpStateTrigger } from '../shared/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInUpStateTrigger]
})
export class HomeComponent implements OnInit {
  @ViewChild('name', { static: false }) name: ElementRef; // accessing a native element component
  creationDate: Date = new Date(2019, 2 - 1, 19);

  constructor() {
  }

  ngOnInit() {
  }
}
