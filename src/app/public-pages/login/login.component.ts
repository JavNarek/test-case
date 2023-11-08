import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationConfig } from 'src/app/core/configs/validation.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private readonly EMAIL = ValidationConfig.EMAIL;
  private readonly PASSWORD = ValidationConfig.PASSWORD;
  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit(): void {}
}
