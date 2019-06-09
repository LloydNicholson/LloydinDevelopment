import { Component, HostBinding, OnInit } from '@angular/core';
import { Post } from './post.model';
import { routeFadeStateTrigger } from '../shared/animation';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class PostsComponent implements OnInit {
  @HostBinding('@routeFadeState') routeFadeState = true;
  posts: Post[] = [];
  isLoading = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getPosts()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
      this.isLoading = false;
    });
  }
}
