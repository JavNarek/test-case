import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input',
})
export class InputDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      '2px solid #007bff'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      '0 0 5px rgba(0, 123, 255, 0.5)'
    );
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'border');
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
