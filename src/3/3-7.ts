// Functions

// Anonymous Functions:
let greet3 = function(name: string): string {
    return `Hello, ${name}!`;
};

console.log(greet3("Alireza")); // Hello, Alireza!


// Arrow Functions:
let add = (a: number, b: number): number => a + b;

console.log("5 + 10 = " + add(5, 10)); // 15



// Recursive Functions:
function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial of 5 is : " + factorial(5)); // 120




// Methods:
class Person2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello(): string {
        return `Hello, my name is ${this.name}.`;
    }
}

let alireza = new Person2("Alireza");
console.log(alireza.sayHello()); // Hello, my name is Alireza.






// ts-node src/3/3-7.ts