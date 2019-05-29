import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { routeFadeStateTrigger, slideInUpStateTrigger } from '../shared/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // routeFadeStateTrigger,
    slideInUpStateTrigger
  ]
})
export class HomeComponent implements OnInit {
  // @HostBinding('@routeFadeState') routeFadeState = true;
  @ViewChild('name', { static: false }) name: ElementRef; // accessing a native element component
  creationDate: Date = new Date(2019, 2 - 1, 19);

  constructor() {
  }

  ngOnInit() {
  }
}
