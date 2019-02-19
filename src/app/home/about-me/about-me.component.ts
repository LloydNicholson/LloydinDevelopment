import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [`
    p, input {
      padding-top: 10px;
    }
    .panel-heading {
      background-color: #1c2252;
      color: darkgray;
      font-family: "Tamil MN", sans-serif;
    }
  `]
})
export class AboutMeComponent implements OnInit {
  entered = false;
  @ViewChild('name') name: ElementRef; // accessing a native element component
  creationDate: Date = new Date(2019, 2 - 1, 19);
  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(this.name.nativeElement);
  // }

  logWelcome(visitorsName: HTMLInputElement) {
    console.log(visitorsName.value);
    this.entered = true;
  }
}
