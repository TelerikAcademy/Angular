import { Injectable } from '@angular/core';
import { Engine } from './engine';

@Injectable()
export class Car {

  constructor(public engine: Engine) { }

  accelerate() {
    console.log(`Uses ${this.engine.hp}hp to accelerate!`);
  }
}
