// OOP

// 1_ Classes => 3-12.ts
// 2_ Inheritance => 3-12.ts
// 3_ Abstraction => 3-12.ts
// 4_ Interface => 3-12.ts
// 5_ Encapsulation => 3-13.ts


// 6_ Polymorphism:
class Animals {
    constructor(public name: string) {}

    makeSound(): void {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animals {
    makeSound(): void {
        console.log("Bark");
    }
}

class Cat2 extends Animals {
    makeSound(): void {
        console.log("Meow");
    }
}

const animals: Animals[] = [new Dog("Buddy"), new Cat2("Kitty")];

animals.forEach((animal) => animal.makeSound());
// Bark
// Meow





// 7_ Composition:
class Engine {
    start(): void {
        console.log("Engine started.");
    }
}

class Car3 {
    engine: Engine;

    constructor() {
        this.engine = new Engine();
    }

    startCar(): void {
        this.engine.start();
    }
}

const car = new Car3();
car.startCar(); // Engine started.








// ts-node src/3/3-14.ts
