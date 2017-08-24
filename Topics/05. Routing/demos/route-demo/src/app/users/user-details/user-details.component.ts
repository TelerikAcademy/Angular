import { UsersService } from './../users.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user;

  constructor(private usersService: UsersService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);

    this.user = this.usersService.getById(id);
  }

}
