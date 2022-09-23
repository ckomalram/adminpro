import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('Pasamos por  el canactive de guard.');
    return this.userService.validateToken().pipe(
      tap(isAuth => {
        // console.log(isAuth);
        if (!isAuth) {
          this.router.navigateByUrl('/login')
        }
      })
    )
  }

}
