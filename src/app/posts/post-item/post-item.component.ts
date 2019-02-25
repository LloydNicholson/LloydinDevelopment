import {Component, Input, OnInit} from '@angular/core';
import {Animations} from '../../shared/animations';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
  animations: [ Animations.slideInUp]
})

export class PostItemComponent implements OnInit {
  @Input() pagePost: Array<{id: number, title: string, date: Date, author: string}>;
  postNumber = 0;
  items = ['Hello', 'Goodbye'];
  constructor() { }

  ngOnInit() {
  }

  onPreviousPost() {
    if (this.postNumber > 0) {
      this.postNumber--;
    }
    console.log(this.postNumber);
  }

  onNextPost() {
    if (this.postNumber < this.pagePost.length - 1) {
      this.postNumber++;
    }
    console.log(this.postNumber);
  }

}
