import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users;

  id;

  activeUser;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data['users'];
    this.route.params.subscribe(x => {
      this.id = +x['id'];
      if (!this.id) {

        this.activeUser = this.users[1];
      } else {
        this.activeUser = this.users.find(y => y.id === +this.id);
        console.log(this.activeUser);
      }
    });
  }
}
