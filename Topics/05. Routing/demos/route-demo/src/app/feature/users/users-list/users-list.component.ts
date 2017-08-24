import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getAll();
  }

  addUser(name: string) {
    const id = this.users.length + 1;
    this.userService.add({ id: id, name: name });
  }
}
