import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: '<h1>{{title}}</h1>',
})
export class PageTitleComponent {
  @Input() title!: string;
}
