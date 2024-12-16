// Encapsulation

class Age {
    private _age: number;

    constructor(age: number) {
        this._age = age;
    }

    get age(): number { // getter
        return this._age;
    }

    set age(value: number) { // setter
        if (value < 0) {
            throw new Error("Age cannot be negative.");
        }
        this._age = value;
    }
}

const yourAge = new Age(25);
console.log(yourAge.age); // 25

yourAge.age = 30;
console.log(yourAge.age); // 30

// yourAge.age = -5; // Age cannot be negative.


// در تایپ اسکریپت کپسوله سازی به صورت بالا انجام می شود
// همچنین به روش زیر نیز می تواند انجام شود



// Namespace:
namespace Geometry {
    export class Circle {
        constructor(public radius: number) {}

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    export class Rectangle {
        constructor(public width: number, public height: number) {}

        getArea(): number {
            return this.width * this.height;
        }
    }
}

const circle = new Geometry.Circle(5);
console.log(circle.getArea()); // 78.53981633974483

const rectangle = new Geometry.Rectangle(10, 20);
console.log(rectangle.getArea()); // 200


// از ماژول و پکیج نیز می توان استفاده کرد اما روش های بالا راحت تر است






// ts-node src/3/3-13.ts
