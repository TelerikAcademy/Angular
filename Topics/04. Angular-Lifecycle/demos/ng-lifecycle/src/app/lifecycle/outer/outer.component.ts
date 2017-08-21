import { Component, OnInit, OnChanges, DoCheck, Input, ChangeDetectionStrategy, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit, OnChanges, DoCheck {
  test;
  
  // @Output()
  em = new EventEmitter();

  ngOnInit(): void {
    // console.log('[Outer] Initialized');
  }

  ngOnChanges(): void {
    console.log('[Outer] On changes called');
  }

  ngDoCheck(): void {
    // console.log('[Outer] Change detection');
  }

  // @HostListener('click', ['$event'])
  changeInput(e) {
    // console.log(e);
    // this.test.name = 'Test1';
    this.em.emit('pesho');
  }
}
