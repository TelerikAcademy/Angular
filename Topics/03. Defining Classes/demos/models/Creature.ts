import { ICanBeHit } from './ICanBeHit';
import { ICanHit } from './ICanHit';

export abstract class Creature implements ICanHit, ICanBeHit {
    private _name: string;
    public damage: number;
    public health: number;

    constructor(name: string, damage: number, health: number) {
        this.name = name;
        this.damage = damage;
        this.health = health;
    }

    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        if (Creature.IsNameValid(newName) === false) {
            throw new Error("Invalid Superhero name");
        }

        this._name = newName;
    }

    public abstract hit(other: ICanBeHit): string;

    public abstract takeHit(damage: number);

    static IsNameValid(name: string): boolean {
        if (name === null ||
            name.length < 3 ||
            name.length > 30) {
            return false;
        }

        return true;
    }
}
