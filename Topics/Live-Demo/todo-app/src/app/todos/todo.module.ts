import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';

import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,

  ],
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  providers: [{
    provide: TodoService,
    useClass: TodoService
  }]
})
export class TodoModule { }
