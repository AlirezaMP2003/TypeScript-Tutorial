// Expressions

// 1_ Literal Expressions:
42;
"Hello, TypeScript!"; // literal string
true;

// 2_ Variable Expressions:
let v = 10;  // variable


// 3_ Arithmetic Expressions:
let w = 5 + 3 * 2;
console.log("5 + 3 * 2 = ", w); // 11


// 4_ Comparison Expressions:
let isGreater = 10 > 5;
console.log(isGreater); // true


// 5_ Logical Expressions:
let isTrue = true && false;
console.log(isTrue); // false


// 6_ Function Call Expressions:
function greeting(name: string): string {
    return `Hello, ${name}!`;
}

let message2 = greeting("Alireza"); // calling function greeting
console.log(message2); // Hello, Alireza


// 7_ Conditional Expressions:
let age2 = 18;
let isAdult = (age2 >= 18) ? "Yes" : "No";
console.log(isAdult); // Yes


// 8_ Object and Array Expressions:
let obj = { name: "Ali", age: 25 };
let arr = [1, 2, 3];


// 9_ New Expressions:
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let ali = new Person("Mohammad");
console.log(ali); // Person { name: 'Mohammad' }


// 10_ Statement-like Expressions:
let z = (() => 10)();
console.log(z); // 10



// انتساب در تایپ اسکریپ
var a2 = 10; // تعریف در سطح تابع
let b2 = 20; // تعریف در سطح بلوک
const c2 = 30; // مقدار ثابت




// ts-node src/3/3-2.ts
