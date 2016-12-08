import { ICanHit } from './models/ICanHit';
import { ICanBeHit } from './models/ICanBeHit';

import { Creature } from './models/creature';

import { Superhero } from "./models/superhero";
import { Beast } from "./models/beast";

function hitting(first: ICanHit, second: ICanBeHit) {
    console.log(first.hit(second));
}

let spiderman: Superhero = new Superhero("Spiderman", "Peter Parker", 7, 60);
let crypto: Beast = new Beast("Crypto", 11, Number.MAX_VALUE);

hitting(crypto, spiderman);
hitting(spiderman, crypto);