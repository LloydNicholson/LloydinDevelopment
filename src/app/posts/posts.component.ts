import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
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
