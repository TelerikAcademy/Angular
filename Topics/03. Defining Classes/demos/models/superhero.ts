import { Creature } from './creature';
import { Person } from "./person";

import { Alignment } from "./alignment"

export class Superhero extends Person {
    constructor(name: string, private secretIdentity: string, private alignment: Alignment) {
        super(name);
    }

    hit(creature: Creature) {
        if (creature === this) {
            console.log(`[${this.name}]: Yup, I am that studip,hitting myself...`);
        } else if (creature instanceof Superhero) {
            let other = <Superhero>creature;
            if (this.alignment === other.alignment) {
                if (this.alignment === Alignment.Good) {
                    console.log(`Just a friendly fight between ${this.name} and ${other.name}`);
                } else {
                    console.log(`A fight for power between ${this.name} and ${other.name}`);
                }
            } else {
                console.log(`${this.name} is fighting ${other.name}`);
            }
        } else if (creature instanceof Person) {
            let other = <Person>(creature);
            console.log(`${other.name} is a collateral damage while ${this.name} fights...`);
        } else {
            console.log(`Poor, poor creature ${creature.name} `);
        }
    }

    static Superhero 
}

let batman = new Superhero("Batman", "Bruce Wayne", Alignment.Good);
let theJoker = new Superhero("The Joker", "Unknown", Alignment.Evil);
let lexLutor = new Superhero("Lex Lutor", "Lex Lutor", Alignment.Evil);

batman.hit(batman);
batman.hit(theJoker);
theJoker.hit(lexLutor);
batman.hit(new Person("John"));