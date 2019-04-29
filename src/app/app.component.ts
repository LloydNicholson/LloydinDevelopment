import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() title = 'Lloyd in Development';
  @Input() author = 'Lloyd Nicholson';

  constructor() {
  }
}
