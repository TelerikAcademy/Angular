import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  private _number;
  @Input()
  set number(val) {
    let num = Number(val);

    if (!num) {
      this._number = 'Not a number passed!';
    }else{
      this._number = num;
    }
  }

  get number() {
    return this._number;
  }

  // tslint default does not allow us to rename it
  @Input('childTitle')
  renamedTitle;

  @Output()
  changeColor = new EventEmitter<string>();

  onChangeColor(value: string) {
    this.changeColor.emit(value);
  }

  callFromLocalVariable(){
    alert('Called through local variable');
  }
}
