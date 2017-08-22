import { ChildComponent } from './child.component';
import { Component, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent)
  child: ChildComponent;

  @ViewChild('child')
  childLocal: ChildComponent;

  @ViewChildren(ChildComponent)
  children;

  ngAfterViewInit(): void {
    console.log(this.children);
  }

  getInstanceOfChild() {
    console.log(this.child);
    this.child.childMethod();
  }

  getInstanceOfChildLocalRef() {
    console.log(this.childLocal);
    this.childLocal.childMethod();
  }
}
