import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.title = this.activatedRoute.snapshot?.data['title'] || '';
  }
}
