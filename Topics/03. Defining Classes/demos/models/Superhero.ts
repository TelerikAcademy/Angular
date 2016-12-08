import { Power } from './Power';

import { ICanBeHit } from './ICanBeHit';
import { Alignment } from "./Alignment";

import { Creature } from './Creature';


export class Superhero extends Creature {
    public secretIdentity: string;
    public powers: Power[];

    constructor(name: string, secretIdentity: string, damage: number, health: number, ...powers: Power[]) {
        super(name, damage, health);
        this.secretIdentity = secretIdentity;
        this.powers = powers;
    }

    usePower(powerName: string, target?: ICanBeHit): string {
        let power = this.powers.find(p => p.name.toLowerCase() == powerName.toLowerCase());
        if (!power) {
            throw new Error(`${this.name} cannot user ${powerName}`);
        }
        if (target) {
            target.takeHit(power.damage);
        }

        return `${this.name} uses ${power.name}`;
    }

    hit(other: ICanBeHit): string {
        other.takeHit(this.damage);
        return `${this.name} hits`;
    }

    takeHit(damage: number) {
        this.health -= damage;
    }
}