import { Component, OnInit } from '@angular/core';

import { UserService } from './../../core/services/user.service';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
  providers: [UserService]
})
export class SideComponent implements OnInit {

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
