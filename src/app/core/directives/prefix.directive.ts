import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[prefix]',
})
export class InputPrefixDirective {
  @Input('prefix') prefix!: string;
  private prefixElement!: HTMLDivElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.prefixElement = document.createElement('div');
    this.prefixElement.className = 'prefix';
    this.prefixElement.textContent = this.prefix;
    this.renderer.insertBefore(
      this.el.nativeElement.parentElement,
      this.prefixElement,
      this.el.nativeElement
    );
    this.renderer.setStyle(this.prefixElement, 'position', 'relative');
    this.renderer.setStyle(this.prefixElement, 'top', '30px');
    this.renderer.setStyle(this.prefixElement, 'left', '5px');
    this.renderer.setStyle(this.prefixElement, 'width', '30px');
    this.renderer.setStyle(this.el.nativeElement, 'padding-left', '25px');
    this.renderer.setStyle(this.el.nativeElement, 'width', '275px');
  }
}
