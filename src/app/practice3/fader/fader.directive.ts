import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appFader]'
})
export class FaderDirective implements OnChanges {

  @Input() highlighted: HTMLElement;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.eleRef.nativeElement !== this.highlighted && this.highlighted != null) {
      this.renderer.addClass(this.eleRef.nativeElement, 'bg-primary');
      this.renderer.removeClass(this.eleRef.nativeElement, 'bg-dark');
      this.renderer.setStyle(this.eleRef.nativeElement, 'opacity', '0.2');
    }
    if (this.highlighted == null) {
      this.renderer.addClass(this.eleRef.nativeElement, 'bg-primary');
      this.renderer.setStyle(this.eleRef.nativeElement, 'opacity', '1.0');
    }
  }
}
