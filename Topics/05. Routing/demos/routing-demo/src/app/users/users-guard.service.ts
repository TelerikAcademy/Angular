import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { UsersService } from './users.service';

@Injectable()
export class UsersGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userFound = !!this.usersService.getById(+(route.params['id']));

    if (!userFound) {
      return false;
    }

    return true;
  }

  constructor(private usersService: UsersService, private router: Router) { }

}
