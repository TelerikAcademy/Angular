import { Superhero } from '../../models/Superhero';
import { Component } from '@angular/core';

import { SUPERHEROES } from '../../data/SUPERHEROES';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './superheroes.component.html',
})
export class SuperheroesComponent {
  superheroes: Superhero[];
  powers: string[];
  power: string;

  constructor() {
    this.superheroes = SUPERHEROES.getAll();
    this.powers = (() => {
      let powersKeys = this.superheroes.reduce((powersObj, superhero) => {
        superhero.powers.forEach(power => powersObj[power] = true);
        return powersObj;
      }, {});
      return Object.keys(powersKeys);
    })();
    this.onSelectedPowerChanged(this.powers[0]);
  }
  onSelectedPowerChanged(power: string) {
    this.power = power;
  }
};

