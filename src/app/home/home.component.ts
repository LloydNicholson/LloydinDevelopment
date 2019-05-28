import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { slideInUpState } from '../shared/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInUpState]
})
export class HomeComponent implements OnInit {
  entered = false;
  @ViewChild('name') name: ElementRef; // accessing a native element component
  creationDate: Date = new Date(2019, 2 - 1, 19);
  constructor() {}

  ngOnInit() {}
}
