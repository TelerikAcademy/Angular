import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class NativeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}
