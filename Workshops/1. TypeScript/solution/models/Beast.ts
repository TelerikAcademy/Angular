import { ICanBePet } from './interfaces/ICanBePet';
import { ICanBeHit } from './interfaces/ICanBeHit';
import { Creature } from './Creature';

export class Beast extends Creature implements ICanBePet {
    constructor(name: string, power: number, health: number) {
        super(name, power, health);
    }

    public get power(): number {
        return this.damage;
    }

    public set power(power) {
        this.damage = power;
    }

    hit(other: ICanBeHit): string {
        let creatureHit = `${this.name} hits with power ${this.power}`;
        other.takeHit(this.power);
        return creatureHit;
    }

    takeHit(damage: number) {
        this.health += damage;
    }
}