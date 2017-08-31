import { IPost } from './../posts.models';
import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts: IPost[];
  public error: string;

  public test = 'gosho';

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPostsManualAsync()
      .subscribe(data => this.posts = data);
  }
}
