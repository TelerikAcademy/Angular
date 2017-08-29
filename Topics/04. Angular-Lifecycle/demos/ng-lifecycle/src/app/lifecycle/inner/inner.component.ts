import { Component, HostListener, OnInit, OnChanges, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  test: { name: any };
  ngOnInit(): void {
    // console.log('[Inner] Initialized');
  }

  ngOnChanges(): void {
    console.log('[Inner] On changes called');
  }

  ngDoCheck(): void {
    console.log('[Inner] Change detection');
  }
}
