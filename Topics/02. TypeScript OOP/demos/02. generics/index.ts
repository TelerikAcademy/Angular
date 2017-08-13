class Person {
    private _name: string;

    constructor(name: string) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 5) {
            throw new Error("Invalid person name!");
        }
    }
}

function identity<T>(arg: T): T {
    return arg;
}

// console.log(identity<string>("Pesho")); // Prints Pesho
// console.log(identity(new Person("Pesho"))); // Type is inferred

class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nameTag: string = "Generic name";
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper()
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

let nameTag = createInstance(Lion).keeper.nameTag;  // typechecks!
let hasMask = createInstance(Bee).keeper.hasMask;   // typechecks!

// console.log(nameTag);
// console.log(hasMask);