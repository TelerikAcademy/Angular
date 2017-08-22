import { Component, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  title;

  @ContentChild('h')
  el;

  @ContentChild('h2')
  elChild;

  childMethod() {
    alert('Called child method');
  }

  showContentChild() {
    console.log('[CONTENT CHILD]: ');
    console.log(this.el);
    console.log(this.elChild);
  }

}
