import { UsersService } from './users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UsersService]
})
export class AppComponent  implements OnInit{
  users;

  title = 'app';

  constructor(private usersService: UsersService){

  }

  ngOnInit(){
    this.users = this.usersService.getAll();
  }
}
