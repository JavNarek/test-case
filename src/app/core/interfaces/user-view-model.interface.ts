import { ROLE } from '../configs/auth.config';
import { User, UserWithRole } from '../models/user.model';

export class UserVM {
  protected _user: User;

  get userWithRole(): UserWithRole {
    return {
      ...this._user,
      role: ROLE[Math.floor(Math.random() * ROLE.length)],
    };
  }

  get user(): User {
    return {
      ...this._user,
    };
  }

  constructor(user: User) {
    this._user = user;
  }

  removeExtFromNumber(ext: string) {
    this._user.phone = this._user.phone.replace(ext, '');
  }

  addExtToNumber(ext: string) {
    this._user.phone = ext + this._user.phone;
  }
}
