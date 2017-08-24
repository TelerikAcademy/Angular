import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Vesela' }
  ];

  constructor() { }

  getAll() {
    return this.users;
  }

  add(user: { id: number, name: string }) {
    this.users.push(user);
  }

}
