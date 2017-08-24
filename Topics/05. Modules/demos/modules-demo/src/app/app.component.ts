import { Component, OnInit } from '@angular/core';
import { UserService } from "./core/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users;
  
  constructor(private userService: UserService) {

  }
  title = 'app';

  ngOnInit() {
    this.users = this.userService.getAll();
  }

}
