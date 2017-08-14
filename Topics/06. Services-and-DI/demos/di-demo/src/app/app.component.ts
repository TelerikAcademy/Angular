import { Component, ReflectiveInjector } from '@angular/core';

import { Car } from './../core/models/car';
import { Engine } from './../core/models/engine';
import { TurboEngine } from './../core/models/turbo-engine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  car: Car;

  constructor() {
    let inj = ReflectiveInjector.resolveAndCreate([Engine, Car]);
    this.car = inj.get(Car);
  }

  // constructor() {
  //   let inj = ReflectiveInjector.resolveAndCreate([Engine, Car]);
  //   this.car = inj.get(Car);

  //   let createdEngine = inj.get(Engine);
  //   let newEngine = new Engine();

  //   console.log(this.car.engine === createdEngine);
  //   console.log(this.car.engine === newEngine);
  // }

  // constructor() {
  //   let parent = ReflectiveInjector.resolveAndCreate([{provide: Engine, useClass: TurboEngine}]);
  //   let child = parent.resolveAndCreateChild([Car]);

  //   this.car = child.get(Car);
  // }


  // constructor() {
  //   let parent = ReflectiveInjector.resolveAndCreate([Car]);
  //   let child = parent.resolveAndCreateChild([Engine]);

  //   this.car = parent.get(Car);
  // }


  onClick() {
    this.car.accelerate();
  }
}
