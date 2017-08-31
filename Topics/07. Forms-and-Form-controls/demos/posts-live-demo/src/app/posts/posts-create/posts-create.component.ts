import { PostsService } from './../posts.service';
import { IPost } from './../posts.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent {
  constructor(private postsService: PostsService) { }

  create(data: IPost) {
    this.postsService.createPost(data);
  }
}
