import { Component } from '@angular/core';

import { SUPERHEROES } from './data/SUPERHEROES';

@Component({
  selector: 'my-app',
  template: `
  <h1>My birthday is on {{birthday | date | uppercase}}</h1>
  {{number | currency}}
  <br/>
  {{number | currency: "USD": true}}
  <br/>
  {{number | currency: "BGN"}}
  <br/>
  {{number | currency: "BGN":true}}
  <br/>
  {{number | currency: "BGN":false:'4.2-2'}}
  <br/>
  
  <label *ngFor="let power of powers">
    <input type="radio" name="powersRadio" (change)="onChange(power)" [value]="power"/>
    {{power}}
    <br/>
  </label>
  <h1>{{power}}</h1>

  <ul>
    <li *ngFor="let superhero of (superheroes | filterByPower: power)">
      <strong>{{superhero.name}}</strong>
      <ul>
        <li *ngFor="let power of superhero.powers">
          {{power}}
        </li>
      </ul>
    </li>
  </ul>
  `,
})
export class AppComponent {
  birthday: Date;
  number: number;
  superheroes: any[];
  powers: string[];
  power: string;

  constructor() {
    this.birthday = new Date();
    this.number = 3.5;
    this.superheroes = SUPERHEROES;
    let powersObj = this.superheroes.reduce((allPowers, superhero) => {
      superhero.powers.forEach(power => allPowers[power] = true);
      return allPowers
    }, {});
    this.powers = Object.keys(powersObj).sort();
    this.power = this.powers[0];
  }

  onChange(power: string) {
    console.log(power);
    this.power = power;
  }
};

