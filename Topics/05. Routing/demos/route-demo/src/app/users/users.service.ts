import { Injectable } from '@angular/core';

export class UsersService {

  users = [
    { id: 1, name: 'Steven' },
    { id: 2, name: 'Viktor' },
    { id: 3, name: 'Cuki' },
  ];

  getAll() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.users);
      }, 0  );
    });
  }

  addUser(user: { id: number, name: string }) {
    this.users.push(user);
  }

  getById(id) {
    return this.users.find(x => x.id === id);
  }
}
