// Arrays

// Declaring an array:
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["one", "two", "three"];

// Single-dimensional Arrays:
let names: string[] = ["Ali", "Reza"];
console.log(names[0]); // "Ali"

// Multi-dimensional Arrays:
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6

// Mixed-type Arrays:
let mixed: (number | string)[] = [1, "two", 3, "four"];
console.log(mixed[1]); // "two"

// Tuple Arrays:
let tuple: [string, number] = ["Ali", 25];
console.log(tuple[0]); // "Ali"


// Operations on Arrays:
// 1_ inserting an element to array:
console.log("numbers: " + numbers); // 1,2,3,4,5
numbers.push(6);
numbers.unshift(10);
console.log("numbers after push & unshift: " + numbers); // [10,1,2,3,4,5,6]


// 2_ deleting from array:
numbers.pop();
numbers.shift();
console.log("numbers after pop & shift: " + numbers); // [1,2,3,4,5]


// 3_ Search:
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // 1


// 4_ Slice & Splice:
console.log(numbers.slice(1, 3)); // [2, 3]
numbers.splice(1, 2);
console.log(numbers); // [1, 4, 5]


// 5_ map & filter:
numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let filtered = numbers.filter(num => num > 2);
console.log(filtered); // [3, 4, 5]


// 6_ for & foreach:
numbers.forEach(num => console.log(num * 3)); // 3, 6, 9, 12, 15

for (let num of numbers) {
    console.log(num * 3); // 3, 6, 9, 12, 15
}


// 7_ Concat:
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log("concating arr1 & arr2: " + combined); // [1, 2, 3, 4]


// 8_ converting array to string:
let str = fruits.join(", ");
console.log("fruits: " + str); // "apple, banana, cherry"





// ts-node src/2/2-6.ts