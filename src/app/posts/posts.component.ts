import { Component, HostBinding, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { routeFadeStateTrigger } from '../shared/animation';

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

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }
}
