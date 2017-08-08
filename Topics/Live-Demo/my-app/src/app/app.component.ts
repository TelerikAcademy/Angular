import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: { name: string, age: number }[];

  constructor() {
  }
}
