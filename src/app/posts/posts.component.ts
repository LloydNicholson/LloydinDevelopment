import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [
    {
      id: 2,
      title: 'Awesome Bar Graph Generator',
      date: new Date(2018, 7 - 1, 6),
      author: 'Lloyd Nicholson'
    },
    {
      id: 1,
      title: 'Platform Builder/Battle Royale',
      date: new Date(2018, 6 - 1, 7),
      author: 'Lloyd Nicholson'},
    {
      id: 0,
      title: 'Developer Tools',
      date: new Date(2018, 2 - 1, 20),
      author: 'Lloyd Nicholson'
    },
    ];
  constructor() { }

  ngOnInit() {

  }

}
