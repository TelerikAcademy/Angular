import { PowerType } from './PowerType';
import { DamageType } from './DamageType';
import { ICanBePet } from './interfaces/ICanBePet';
import { Beast } from './Beast';
import { Person } from './Person';
import { Power } from './Power';

import { ICanBeHit } from './interfaces/ICanBeHit';
import { Alignment } from './Alignment';

import { Creature } from './Creature';

export class Superhero extends Creature {
    public secretIdentity: string;
    public alignment: Alignment;
    public powers: Power[];
    // public pets: (Beast | Person)[];
    public pets: ICanBePet[];

    constructor(name: string, secretIdentity: string, alignment: Alignment, damage: number, health: number, powers: Power[], immunities: DamageType[] = [], ...pets: ICanBePet[]) {
        super(name, damage, health, ...immunities);
        this.secretIdentity = secretIdentity;
        this.alignment = alignment;
        this.powers = powers;
        this.pets = pets;
    }

    usePower(powerName: string, target?: ICanBeHit): string {
        let power = this.powers.find(p => p.name.toLowerCase() === powerName.toLowerCase());
        if (!power) {
            throw new Error(`${this.name} cannot user ${powerName}`);
        }

        if (target && target !== this) {
            target.takeHitWith(power);
        }

        return `${this.name} uses ${power.name}`;
    }

    hit(other: ICanBeHit): string {
        other.takeHit(this.damage);
        return `${this.name} hits`;
    }
}