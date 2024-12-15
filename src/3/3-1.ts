// Operators

// 1_ Arithmetic Operators:
// + - * / % **
console.log("2 + 3 = ", 2 + 3);
console.log("4 - 3 = ", 4 - 3);
console.log("5 * 4 = ", 5 * 4);
console.log("30 / 6 = ", 30 / 6);
console.log("25 % 4 = ", 25 % 4);
console.log("2 ** 3 = ", 2 ** 3);


// 2_ Comparison Operators:
// == === != !== > < >= <=
let x = 5;
let y = 6;
if (x != y) {
    console.log("Not Equal");
}else {
    console.log("Equal");
}

// 3_ Logical Operators:
// && !
if (x != y && y > x) {
    console.log("Y is greater than X");
}else {
    console.log("Equal");
}


// 4_ Assignment Operators:
// = += -= /= *= %= **=
x += 5;
y *= 5;
console.log(x, y); // 10 30


// 5_ Bitwise Operators:
// & ^ ~ >> <<
let x2 = 5 >> 1;
let x3 = 5 << 1;
console.log("5 >> 1 = ", x2); // shift to right
console.log("5 << 1 = ", x3); // shift to left


// Other Operators:
// Ternary Operators:
let result = (5 > 3) ? "Greater" : "Smaller";
console.log(result); // "Greater"


// Increment & Decrement:
let x4 = 5;
console.log(++x4); // 6
console.log(x4--); // 6
console.log(x4); // 4



// Precedence:
// ()
// ++ --
// **
// / * %
// + -
let y2 = 3 + (4 + 1) ** 2 / 5;
console.log("3 + (4 + 1) ** 2 / 5 = ", y2); // 8


// Associativity:
// += -=  => right to left
// + - * /  => left to right
let y3 = 10;
y3 = y3 += 3;
console.log(y3); // 13



// ts-node src/3/3-1.ts
