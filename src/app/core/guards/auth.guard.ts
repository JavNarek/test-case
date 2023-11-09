import { CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, map } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<UrlTree | boolean> {
    return this.authService.loginState().pipe(
      map((loggedInState) => {
        if (loggedInState) {
          return true;
        } else {
          return this.router.createUrlTree(['login']);
        }
      })
    );
  }
}
