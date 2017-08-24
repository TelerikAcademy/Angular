import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UsersResolver implements Resolve<any> {

  constructor(private usersService: UsersService)  { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.usersService.getAll();
  }
}
