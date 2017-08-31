import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHighlightItem]' })
export class HighlightItemDirective {
  @Input() bgColor: string;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('click') onItemClick() {
       this.elementRef.nativeElement.style.color = 'black';
       this.elementRef.nativeElement.style.background = this.bgColor;
   }
}
