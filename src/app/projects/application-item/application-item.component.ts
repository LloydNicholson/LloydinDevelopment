import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent implements OnInit {
  @Input() app: {name: string, url: string, imageUrl: string, details: string};
  constructor() { }

  ngOnInit() {
  }

}
