import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './../users.service';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  subscription: Subscription;
  users: { name: string, age: number, egn: string }[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=>this.users=data);
  }

  ngOnDestroy() {
  }

}
