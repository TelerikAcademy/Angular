export interface ICanBeHit {
    health: number;

    takeHit(damage: number);
}
