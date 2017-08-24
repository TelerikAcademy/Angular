import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  // providers: [UsersService]
})
export class UsersListComponent implements OnInit {

  users;

  activeUser;

  constructor(private usersService: UsersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.users = this.activatedRoute.snapshot.data['users'];
    this.usersService.getAll()
      .then(users => this.users = users);

    this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];

      
      this.activeUser = this.usersService.getById(id);
    });
  }

  addUser(name) {
    const id = this.users.length + 1;

    this.usersService.addUser({ id: id, name: name });
  }

}
