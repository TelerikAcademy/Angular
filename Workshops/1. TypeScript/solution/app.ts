//  TypeScript does not have implemention for Array#find() ....
import './polyfills/arrays';

import { Alignment } from './models/Alignment';
import { PowerType } from './models/PowerType';
import { Power } from './models/Power';

import { DamageType } from './models/DamageType';

import { ICanHit } from './models/interfaces/ICanHit';
import { ICanBeHit } from './models/interfaces/ICanBeHit';

import { Creature } from './models/Creature';

import { Superhero } from './models/Superhero';
import { Beast } from './models/Beast';

function hitting(first: ICanHit, second: ICanBeHit) {
    console.log(first.hit(second));
}

let spiderman: Superhero = new Superhero('Spiderman', 'Peter Parker', Alignment.Evil, 30, 300, [], [DamageType.Psysical]);

let crypto = new Beast('Crypto', 10, 100);

let drStrange = new Superhero('Dr. Strange', 'Dr. Stephen Strange', Alignment.Good, 10, 100, [new Power('Magic', 11, PowerType.Destructive, DamageType.Magical)]);
console.log(spiderman.health);

drStrange.usePower('magic', spiderman);
console.log(spiderman.health);
