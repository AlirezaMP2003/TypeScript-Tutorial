// Parameter Passing

// 1_ By Value:
function modifyValue(x: number): void {
    x = x + 10;
    console.log("Inside function:", x); // 15
}

let a3 = 5;
modifyValue(a3);
console.log("Outside function:", a3); // 5




// 2_ By Reference:
function modifyObject(obj: { name: string }): void {
    obj.name = "Mohammad";
    console.log("Inside function:", obj.name); // Mohammad
}

let person2 = { name: "Alireza" };
console.log("Outside function:", person2.name); // Alireza
modifyObject(person2);
console.log("Outside function:", person2.name); // Mohammad



// Return Types:

// number, string, boolean, array, object
function subtract(a: number, b: number): number {
    return a - b;
}
console.log(subtract(27, 16)); // 11


function createUser(name: string, age: number): { name: string; age: number } {
    return { name, age };
}

let user2 = createUser("Hesam", 40);
console.log(user2); // { name: "Hesam", age: 40 }


// void
function subtract2(a: number, b: number): void {
    console.log(a - b);
}
subtract2(27, 16);



// never
function throwError(message: string): never {
    throw new Error(message);
}



// generic
function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(59)); // 59
console.log(identity<string>("Taghi")); // Taghi



// union
function process(value: number | string): string {
    if (typeof value === "number") {
        return `Number: ${value}`;
    } else {
        return `String: ${value}`;
    }
}

console.log(process(42)); // Number: 42
console.log(process("Mehdi")); // String: Mehdi








// ts-node src/3/3-8.ts