import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  Input,
  SimpleChanges,
  ContentChild,
  forwardRef,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, DoCheck {

  @Input() title: string = 'Test';

  @ContentChild('myParagraph') insideDivContent: ElementRef;

  constructor() {
    console.log('Home OnInit');
  }

  ngOnInit() {
    console.log('Home OnInit');
  }

  ngDoCheck() {
    console.log('Home Do Check');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Home OnChanges');
    console.log(changes);
  }

  ngAfterContentInit() {
    console.log('Home AfterContentInit');
    console.log(this.insideDivContent);
  }

  ngAfterContentChecked() {
    console.log('Home AfterContentCheck');
  }
}
