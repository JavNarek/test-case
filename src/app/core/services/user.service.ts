import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from './storage.service';
import { UserVM } from '../interfaces/user-view-model.interface';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ValidationConfig } from '../configs/validation.config';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  currentUser$: Observable<User | null> =
    this.currentUserSubject.asObservable();
  readonly PHONE_NUMBER = ValidationConfig.PHONE_NUMBER;
  constructor(
    private storageService: StorageService,
    private toastr: ToastrService
  ) {}

  updateUser(data: User) {
    const user = new UserVM(data);
    user.addExtToNumber(this.PHONE_NUMBER.EXTENSION);
    this.storageService.setItem('user', user.userWithRole, true);
    this.currentUserSubject.next(user.userWithRole);
    this.toastr.success('Profile has been updated!', 'Sucsess');
  }

  getUser(): User {
    const userModel = this.storageService.getItem<User>('user', true);
    const user = new UserVM(userModel);
    user.removeExtFromNumber(this.PHONE_NUMBER.EXTENSION);
    this.currentUserSubject.next(user.user);
    return user.user;
  }
}
