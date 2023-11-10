import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [DashboardComponent, SideMenuComponent, HeaderComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
