import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersService {

  users = [
    { "name": "Pesho", "age": 10 },
    { "name": "Maria", "age": 15 }
  ]
  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.get('./src/app/data/users.json').map(x => x.json())
  }
}
