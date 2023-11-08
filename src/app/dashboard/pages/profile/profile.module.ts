import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';
import {
  InputDirectiveModule,
  InputValidationDirectiveModule,
} from 'src/app/core/directives/directives.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PageTitleModule,
    InputDirectiveModule,
    InputValidationDirectiveModule,
  ],
})
export class ProfileModule {}
