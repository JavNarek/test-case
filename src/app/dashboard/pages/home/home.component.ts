import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '<app-page-title [title]="title"></app-page-title>',
})
export class HomeComponent {
  title: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.title = this.activatedRoute.snapshot?.data['title'] || '';
  }
}
