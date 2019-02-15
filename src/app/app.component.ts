import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    body {
      padding-top: 100px;
      font-size: 22px;
      font-family: "Sukhumvit Set", serif;
    }`],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
