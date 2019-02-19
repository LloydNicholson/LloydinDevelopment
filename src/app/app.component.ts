import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    body {
      padding-top: 90px;
      font-size: 22px;
      font-family: Beirut, sans-serif;
    }
    h1, h2, h3, h4 {
      font-family: "Tamil MN", sans-serif;
    }`],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @Input() title = 'Lloyd in Development';
  @Input() author = 'Lloyd Nicholson';
  constructor() {}
}
