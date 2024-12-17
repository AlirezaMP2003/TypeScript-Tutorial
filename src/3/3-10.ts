// Overloading


function display(value: string): void;
function display(value: number): void;

function display(value: string | number): void {
    if (typeof value === "string") {
        console.log("String value: " + value);
    } else {
        console.log("Number value: " + value);
    }
}

display("Hello"); // String value: Hello
display(13);      // Number value: 13




function sum3(a: number, b: number): number;
function sum3(a: number, b: number, c: number): number;

function sum3(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

console.log(sum3(1, 2));       // 3
console.log(sum3(1, 2, 3));    // 6







// ts-node src/3/3-10.ts
