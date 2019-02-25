import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    body {
      padding-top: 90px;
      font-size: 22px;
      font-family: 'Quicksand', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, nav {
      font-family: 'Jura', sans-serif;
    }`],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @Input() title = 'Lloyd in Development';
  @Input() author = 'Lloyd Nicholson';
  constructor() {}
}
