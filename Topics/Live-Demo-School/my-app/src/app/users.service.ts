import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.get('./src/app/data/users.json').map(x => x.json())
  }
}
