import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputValidation]',
})
export class InputValidationDirective {
  @Input('appValidation') errorMessage!: string;
  private errorPopup!: HTMLDivElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngControl: NgControl
  ) {}

  ngOnInit() {
    this.errorPopup = document.createElement('div');
    this.errorPopup.className = 'error-popup';
    this.errorPopup.textContent = this.errorMessage;
    this.renderer.appendChild(
      this.el.nativeElement.parentElement,
      this.errorPopup
    );
  }

  @HostListener('keyup') onKeyUp() {
    this.handleValidation();
  }

  handleValidation() {
    if (this.ngControl.invalid) {
      this.renderer.setStyle(this.errorPopup, 'visibility', 'visible');
    } else {
      this.renderer.setStyle(this.errorPopup, 'visibility', 'hidden');
    }
  }
}
