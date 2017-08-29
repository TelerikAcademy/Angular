import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { PostsService } from './posts.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpModule
  ],
  declarations: [
    PostsListComponent,
    PostsCreateComponent
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
