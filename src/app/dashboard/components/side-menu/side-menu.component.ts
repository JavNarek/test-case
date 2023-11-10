import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  constructor(private router: Router) {}
  currentSection: string = 'home';
  navigateTo(section: string) {
    this.currentSection = section;
    this.router.navigate([this.currentSection]);
  }
}
