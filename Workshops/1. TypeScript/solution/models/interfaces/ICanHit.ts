import {ICanBeHit} from './ICanBeHit';

export interface ICanHit {
    damage: number;

    hit(other: ICanBeHit): string;
}