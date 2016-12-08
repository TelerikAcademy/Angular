import { Power } from '../Power';
export interface ICanBeHit {
    health: number;

    takeHit(damage: number);
    takeHitWith(power: Power);
}
