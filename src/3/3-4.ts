// Logical Expressions

// 1_ AND:
let age4 = 25;
if (age4 > 18 && age4 < 30) {
    console.log("Age is between 18 and 30.");
}


// 2_ OR:
let isAdmin2 = false;
let isUser = true;

if (isAdmin2 || isUser) {
    console.log("Access granted.");
}



// 3_ NOT:
let isActive = false;

if (!isActive) {
    console.log("The account is inactive.");
}



// 4_ Nullish Coalescing:
let input: string | undefined = undefined;
let output = input ?? "Default Value";
console.log(output); // Default Value



// 5_ Optional Chaining:
let user = { name: "Ali", address: { city: "Tehran" } };
let city = user?.address?.city;
console.log(city); // Tehran






// ts-node src/3/3-4.ts
