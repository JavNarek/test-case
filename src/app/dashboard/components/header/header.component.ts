import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentUser$: Observable<User | null>;
  constructor(private userService: UserService) {
    this.currentUser$ = this.userService.currentUser$;
    this.userService.getUser();
  }

  logout() {}
}
