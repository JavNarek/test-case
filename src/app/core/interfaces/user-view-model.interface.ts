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

  constructor(user: User) {
    this._user = user;
  }
}
