import { Directive, ElementRef, HostListener, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @Output() eventEmitter = new EventEmitter<HTMLElement>();
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') entered() {
    this.renderer.removeClass(this.eleRef.nativeElement, 'bg-primary');
    this.renderer.addClass(this.eleRef.nativeElement, 'bg-dark');
    this.eventEmitter.emit(this.eleRef.nativeElement);
  }

  @HostListener('mouseleave') leave() {
    this.renderer.addClass(this.eleRef.nativeElement, 'bg-primary');
    this.renderer.removeClass(this.eleRef.nativeElement, 'bg-dark');
    this.eventEmitter.emit(null);
  }
}
