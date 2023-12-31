import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputValidationDirective } from './input-validation.directive';
import { InputDirective } from './input.directive';
import { InputPrefixDirective } from './prefix.directive';

@NgModule({
  declarations: [InputValidationDirective],
  imports: [CommonModule],
  exports: [InputValidationDirective],
})
export class InputValidationDirectiveModule {}

@NgModule({
  declarations: [InputDirective],
  imports: [CommonModule],
  exports: [InputDirective],
})
export class InputDirectiveModule {}

@NgModule({
  declarations: [InputPrefixDirective],
  imports: [CommonModule],
  exports: [InputPrefixDirective],
})
export class InputPrefixDirectiveModule {}
