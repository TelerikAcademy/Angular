import { Component, SimpleChanges, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('f') f: NgForm;

  constructor() {
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm);
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.div);
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
