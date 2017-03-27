import {
  Component,
  OnChanges,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ContentChild,
  Input,
  SimpleChanges
} from '@angular/core';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('myHome') insideDiv: HomeComponent;

  constructor() {
    console.log('App Constructor');
    console.log(this.insideDiv );

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('App OnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('App OnInit' );
    console.log(this.insideDiv);
  }

  ngAfterViewInit() {
    console.log('App AfterViewInit' );
    console.log(this.insideDiv );
  }

  ngAfterViewChecked() {
    console.log('App AfterViewChecked' );
  }
}
