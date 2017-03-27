import { Component, OnInit } from '@angular/core';

import { UserService } from './../../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAll();
  }

  logAll() {
    console.log(this.userService.getAll());
  }

  add(user) {
    this.userService.add(user);
  }

}
