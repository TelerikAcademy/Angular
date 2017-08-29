import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-parent-other',
  templateUrl: './parent-other.component.html',
  styleUrls: ['./parent-other.component.css']
})
export class ParentOtherComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.elementRef);

    const h1 = this.renderer.createElement('h1');
    this.renderer.setProperty(h1, 'innerHTML', 'Added h1 by Renderer2');
    this.renderer.appendChild(this.elementRef.nativeElement, h1);
  }
}
