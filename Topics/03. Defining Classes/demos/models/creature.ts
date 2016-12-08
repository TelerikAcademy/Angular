export class Creature {
    public _name: string;

    constructor(name: string) {
        this.name = name;
    }

    public get name() {
        return this._name
    }

    public set name(name) {
        this._name = name;
    }

    public walk(): void {
        console.log("I am walking!");
    }
}