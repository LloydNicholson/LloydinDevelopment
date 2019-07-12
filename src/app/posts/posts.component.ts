import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post.model';
import { routeFadeStateTrigger } from '../shared/animation';
import { DataService } from '../shared/data.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { startLoading, stopLoading } from '../store/app.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class PostsComponent implements OnInit, OnDestroy {
  @HostBinding('@routeFadeState') routeFadeState = true;
  posts: Post[] = [];
  postsSub: Subscription;
  isLoading = true;

  constructor(
      private dataService: DataService,
      private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('app').subscribe((state) => {
      this.isLoading = state.isLoading;
    });

    this.store.dispatch(startLoading());
    this.postsSub = this.dataService
    .getPosts()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
      this.store.dispatch(stopLoading());
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
