import { DamageType } from './DamageType';
import { PowerType } from './PowerType';

export class Power {
    name: string;
    damage: number;
    powerType: PowerType;
    damageType: DamageType;

    constructor(name: string, damage: number, powerType: PowerType, damageType: DamageType) {
        this.name = name;
        this.damage = damage;
        this.powerType = powerType;
        this.damageType = damageType;
    }
}