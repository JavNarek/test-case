import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { PageTitleModule } from 'src/app/components/page-title/page-title.module';

@NgModule({
  declarations: [InventoryComponent],
  imports: [CommonModule, InventoryRoutingModule, PageTitleModule],
})
export class InventoryModule {}
