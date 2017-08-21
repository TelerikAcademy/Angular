import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos = [
    { name: 'Buy milk', dueDate: '11/11/2017' },
    { name: 'Call Pesho for beer!', dueDate: '9/9/2017' }
  ];

  getAll() {
    return this.todos;
  }
}
