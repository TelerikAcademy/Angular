import '../polyfills/arrays';

import { Power } from './Power';
import { DamageType } from './DamageType';
import { ICanBeHit } from './interfaces/ICanBeHit';
import { ICanHit } from './interfaces/ICanHit';

export abstract class Creature implements ICanBeHit {
    private _name: string;
    public damage: number;
    public health: number;
    public immunities: DamageType[];

    constructor(name: string, damage: number, health: number, ...immunities: DamageType[]) {
        this.name = name;
        this.damage = damage;
        this.health = health;
        this.immunities = immunities;
    }

    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        if (Creature.IsNameValid(newName) === false) {
            throw new Error('Invalid Superhero name');
        }

        this._name = newName;
    }

    public takeHit(damage: number) {
        if (this.immunities.includes(DamageType.Psysical)) {
            return;
        }

        this.health -= damage;
    }

    public takeHitWith(power: Power) {
        if (this.immunities.includes(power.damageType)) {
            return;
        }

        this.health -= power.damage;
    }

    static IsNameValid(name: string): boolean {
        if (name === null ||
            name.length < 3 ||
            name.length > 30) {
            return false;
        }

        return true;
    }
}
