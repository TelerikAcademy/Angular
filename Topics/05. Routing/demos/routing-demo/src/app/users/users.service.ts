import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Petko' },
    { id: 4, name: 'John' },
  ];

  constructor() { }

  getAll(): any {

    return new Promise(res => {
      setTimeout(() => {
        res(this.users);
      }, 100);
    });
  }

  getById(id) {
    return this.users.find(x => x.id === id);
  }
}
