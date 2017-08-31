import { HighlightItemDirective } from './shared/highlight.directive';
import { PeshofierPipe } from './shared/peshofier.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { PostsService } from './posts.service';
import { HttpModule } from '@angular/http';
import { PostsEditComponent } from './posts-edit/posts-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostsListComponent,
    PostsCreateComponent,
    PostsEditComponent,
    PeshofierPipe,
    HighlightItemDirective
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }
