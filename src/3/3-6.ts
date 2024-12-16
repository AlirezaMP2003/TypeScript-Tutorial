// Loops

// for:
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}



// while:
let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}



// do-while:
let count2 = 0;
do {
    console.log(`Count is ${count2}`);
    count2++;
} while (count2 < 3);



// for-of:
let numbers2 = [10, 20, 30];
for (let num of numbers2) {
    console.log(num);
}


// for-in:
const person = {
    name: "Alireza",
    age: 21,
    city: "Babolsar"
};

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }
}




// Flow Control:

// break:
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
} // 0 1 2


// continue:
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
} // 0 1 3 4


// return:
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(5, 10)); // 15


// throw:
function checkAge(age: number): void {
    if (age < 18) throw new Error("Age must be 18 or above.");
}
try {
    checkAge(16);
} catch (error: any) {
    console.log(error.message); // "Age must be 18 or above."
}



// try-catch-finally:
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred.");
} finally {
    console.log("Execution finished.");
}






// ts-node src/3/3-6.ts
