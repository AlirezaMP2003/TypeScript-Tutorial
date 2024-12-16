// Data Abstraction


// 1_ Classes:
class Person5 {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const aPerson = new Person5("Alireza", "Mousapour", 21);
console.log(aPerson.fullName()); // Alireza Mousapour



// Inheritance:
class Employee extends Person5 {
    jobTitle: string;

    constructor(firstName: string, lastName: string, age: number, jobTitle: string) {
        super(firstName, lastName, age);
        this.jobTitle = jobTitle;
    }

    employeeInfo(): string {
        return `${this.fullName()} - ${this.jobTitle}`;
    }
}

const employee = new Employee("Sadegh", "Moosavinejhad", 22, "Software Engineer");
console.log(employee.employeeInfo()); // Sadegh Moosavinejhad - Software Engineer





// 2_ Interfaces:
interface Car {
    brand: string;
    model: string;
    year: number;
    drive(speed: number): void;
}

class SportsCar implements Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    drive(speed: number): void {
        console.log(`${this.brand} ${this.model} is driving at ${speed} km/h.`);
    }
}

const myCar = new SportsCar("Porsche", "911", 2023);
myCar.drive(120); // Porsche 911 is driving at 120 km/h.



// 3_ Abstract Classes:
abstract class Animal {
    abstract sound(): void;

    move(): void {
        console.log("Animal is moving");
    }
}

class Cat extends Animal {
    sound(): void {
        console.log("Meww!");
    }
}

const cat = new Cat();
cat.sound(); // Meww!
cat.move();  // Animal is moving




// 4_ Type Aliases:
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(point); // { x: 10, y: 20 }






// ts-node src/3/3-12.ts
