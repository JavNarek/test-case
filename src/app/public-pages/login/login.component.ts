import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationConfig } from 'src/app/core/configs/validation.config';
import { UserLoginModel } from 'src/app/core/models/auth.model';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserWithRole } from '../../core/models/user.model';
import { UserVM } from 'src/app/core/interfaces/user-view-model.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  readonly EMAIL = ValidationConfig.EMAIL;
  readonly PASSWORD = ValidationConfig.PASSWORD;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        'test@mail.ru',
        [
          Validators.required,
          Validators.pattern(this.EMAIL.PATTERN),
          Validators.maxLength(this.EMAIL.LENGTH),
        ],
      ],
      password: [
        'Aa12345678!',
        [
          Validators.pattern(this.PASSWORD.PATTERN.source),
          Validators.maxLength(this.PASSWORD.LENGTH),
          Validators.required,
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const payload = this.loginForm.value as UserLoginModel;
    this.authService
      .login(payload)
      .pipe(filter(({ token }) => !!token))
      .subscribe({
        next: ({ token, user }) => this.onLoginSuccess(token, user),
        error: (err) => console.log(err),
      });
  }

  onLoginSuccess(token: string, user: User): void {
    const UserWithRole = new UserVM(user).userWithRole;
    this.storageService.setItem('token', token);
    this.storageService.setItem('user', UserWithRole, true);
    this.router.navigate(['home']);
  }
}
