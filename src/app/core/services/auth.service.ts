import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserLoginModel } from '../models/auth.model';
import { EMAIL, PASSWORD, TOKEN, USER } from '../configs/auth.config';
import { StorageService } from './storage.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly _email: string = EMAIL;
  readonly _password: string = PASSWORD;
  readonly _user: User = USER;

  constructor(private storageService: StorageService) {}
  login(payload: UserLoginModel): Observable<{ token: string; user: User }> {
    const { email, password } = payload;
    if (email === this._email && password === this._password) {
      // Simulate successful login
      return of({ token: TOKEN, user: this._user });
    } else {
      // Simulate incorrect login
      return throwError(() => new Error('Error'));
    }
  }

  loginState(): Observable<boolean> {
    const token = this.storageService.getItem('token');
    return token ? of(true) : of(false);
  }
}
