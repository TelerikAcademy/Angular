import { IPost } from './../posts.models';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
  private title: FormControl;
  private body: FormControl;

  public editForm: FormGroup;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService
      .getPostById(0)
      .subscribe(data => {
        this.title = new FormControl(data.title, [Validators.required]);
        this.body = new FormControl(data.body, Validators.required);

        this.editForm = new FormGroup({
          title: this.title,
          body: this.body
        });
      });
  }

  public edit(data: IPost) {
    this.postsService.editPost(data);
  }
}
