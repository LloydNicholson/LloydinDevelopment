import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Animations } from '../shared/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [Animations.slideInUp]
})
export class HomeComponent implements OnInit {
  entered = false;
  @ViewChild('name') name: ElementRef; // accessing a native element component
  creationDate: Date = new Date(2019, 2 - 1, 19);
  constructor() {}

  ngOnInit() {}
}
