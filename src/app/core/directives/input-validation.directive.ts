import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appInputValidation]',
})
export class InputValidationDirective {
  @Input('appValidation') errorMessage!: string;
  private errorPopup!: HTMLDivElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.errorPopup = document.createElement('div');
    this.errorPopup.className = 'error-popup';
    this.errorPopup.textContent = this.errorMessage;
    this.renderer.setStyle(this.errorPopup, 'display', 'none');
    this.renderer.appendChild(this.el.nativeElement, this.errorPopup);
  }

  @HostListener('blur') onBlur() {
    if (
      this.el.nativeElement.validity &&
      !this.el.nativeElement.validity.valid
    ) {
      this.renderer.setStyle(this.errorPopup, 'display', 'block');
    } else {
      this.renderer.setStyle(this.errorPopup, 'display', 'none');
    }
  }
}
