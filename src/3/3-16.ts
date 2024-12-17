// Functional Programming

// 1_ Higher-Order Functions:
function higherOrder(fn: (x: number) => number, value: number): number {
    return fn(value);
}

const square = (x: number) => x * x;

console.log(higherOrder(square, 5)); // 25


// 2_ setting type:
const add3: (a: number, b: number) => number = (a, b) => a + b;
console.log(add3(2, 3)); // 5



// 3_ Function Composition:
const multiplyBy2 = (x: number) => x * 2;
const add4 = (x: number) => x + 4;

const compose = (f: (x: number) => number, g: (x: number) => number) => (x: number) => f(g(x));

const multiplyAndAdd = compose(multiplyBy2, add4);

console.log(multiplyAndAdd(5)); // 18 => 2 * (5 + 4)



// 4_ Anonymous Functions:
const nums = [1, 2, 3];
const doubledNum = nums.map((x) => x * 2);
console.log(doubledNum); // [2, 4, 6]


// 5_ Pure Functions:
const pureFunction = (a: number, b: number) => a + b;
console.log(pureFunction(3, 4)); // 7



// 6_ Prebuilt functions: map, filter, ....
const evenNums = nums.filter((x) => x % 2 === 0);
console.log(evenNums); // [2]







// ts-node src/3/3-16.ts
