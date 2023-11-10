import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationConfig } from 'src/app/core/configs/validation.config';
import { UserVM } from 'src/app/core/interfaces/user-view-model.interface';
import { User } from 'src/app/core/models/user.model';
import { StorageService } from 'src/app/core/services/storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title: string;
  profileForm!: FormGroup;
  readonly EMAIL = ValidationConfig.EMAIL;
  readonly FIRST_NAME = ValidationConfig.FIRST_NAME;
  readonly LAST_NAME = ValidationConfig.LAST_NAME;
  readonly PHONE_NUMBER = ValidationConfig.PHONE_NUMBER;
  readonly WEBSITE = ValidationConfig.WEBSITE;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.title = this.activatedRoute.snapshot?.data['title'] || '';
    this.initForm();
    this.patchForm();
  }

  initForm(): void {
    this.profileForm = this.formBuilder.group({
      email: [
        'cvbcvb@fhgfgh.vom',
        [
          Validators.required,
          Validators.pattern(this.EMAIL.PATTERN),
          Validators.maxLength(this.EMAIL.LENGTH),
        ],
      ],
      firstName: [
        '',
        [Validators.required, Validators.maxLength(this.FIRST_NAME.LENGTH)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.maxLength(this.LAST_NAME.LENGTH)],
      ],
      phone: [
        '',
        [Validators.required, Validators.maxLength(this.PHONE_NUMBER.LENGTH)],
      ],
      webSiteURL: [
        '',
        [Validators.required, Validators.pattern(this.WEBSITE.PATTERN)],
      ],
    });

    this.profileForm.get('email')?.disable();
  }

  private patchForm() {
    const user = this.userService.getUser();
    this.profileForm.patchValue({ ...user });
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.userService.updateUser(this.profileForm.getRawValue());
  }
}
