import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationConfig } from 'src/app/core/configs/validation.config';
import { UserLoginModel } from 'src/app/core/models/auth.model';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserVM } from 'src/app/core/interfaces/user-view-model.interface';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  readonly EMAIL = ValidationConfig.EMAIL;
  readonly PASSWORD = ValidationConfig.PASSWORD;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.EMAIL.PATTERN),
          Validators.maxLength(this.EMAIL.LENGTH),
        ],
      ],
      password: [
        '',
        [
          Validators.pattern(this.PASSWORD.PATTERN.source),
          Validators.maxLength(this.PASSWORD.LENGTH),
          Validators.required,
        ],
      ],
    });
  }

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
        error: (err) => this.toastr.error(err, 'Error'),
      });
  }

  onLoginSuccess(token: string, user: User): void {
    const UserWithRole = new UserVM(user).userWithRole;
    this.storageService.setItem('token', token);
    this.storageService.setItem('user', UserWithRole, true);
    this.toastr.success('You successfully logged in', 'Sucsess');
    this.router.navigate(['home']);
  }
}
