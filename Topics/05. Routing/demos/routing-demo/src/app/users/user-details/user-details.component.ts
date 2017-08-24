import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id;
  user;
  constructor(private activatedRoute: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(x => this.id = +x['id']);
    this.user = this.usersService.getById(this.id);
  }

}
