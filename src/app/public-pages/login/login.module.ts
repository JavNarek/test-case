import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  InputDirectiveModule,
  InputValidationDirectiveModule,
} from 'src/app/core/directives/directives.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    InputDirectiveModule,
    InputValidationDirectiveModule,
  ],
})
export class LoginModule {}
