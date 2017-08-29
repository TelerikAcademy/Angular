import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentNumber = 1;

  aliasTitle = 'Alias title passed from parent to child';

  // method to be called. Could be any method you decide.
  parentChangeColor(value) {
    alert(value);
  }
}
