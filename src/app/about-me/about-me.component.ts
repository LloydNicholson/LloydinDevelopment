import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [`
    p, input {
      padding-top: 10px;
    }
  `]
})
export class AboutMeComponent implements OnInit {
  entered = false;
  @ViewChild('name') name: ElementRef; // accessing a native element component
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
