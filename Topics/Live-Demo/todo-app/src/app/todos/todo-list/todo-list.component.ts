import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getAll();
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(x => x.name !== todo.name);
  }
}
