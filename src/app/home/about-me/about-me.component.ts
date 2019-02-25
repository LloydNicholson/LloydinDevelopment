import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Animations} from '../../shared/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [`
    p, input {
      padding-top: 10px;
    }
  `],
  animations: [Animations.slideInUp]
})
export class AboutMeComponent implements OnInit {
  entered = false;
  @ViewChild('name') name: ElementRef; // accessing a native element component
  creationDate: Date = new Date(2019, 2 - 1, 19);
  constructor() { }

  ngOnInit() {
  }
}
