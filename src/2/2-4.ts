// Strings
// 1_ Single-line Strings:
let singleQuoteString: string = 'Hello, World!';
let doubleQuoteString: string = "TypeScript is great!";

// 2_ Template Strings:
let name2: string = "Alireza";
let templateString: string = `Hello, ${name2}!`;
console.log(templateString); // Hello, Alireza!

// 3_ Literal Strings:
type Role = "Admin" | "User" | "Guest";

let myRole: Role = "Admin"; // صحیح
// myRole = "SuperAdmin"; // خطا



// Operations on Strings:
// 1_ Concatenation:
let firstName = "Alireza";
let lastName = "Mousapour";
let fullName = firstName + " " + lastName; // concat with +
let fullNameTemplate = `${firstName} ${lastName}`; // cocat with template string
console.log(fullName); // Alireza Mousapour

// 2_ Accessing:
let message = "Hello.";
console.log(message[0]); // H
console.log(message.charAt(1)); // e

// 3_ Length:
console.log("Length of message: " + message.length);

// 4_ Case Conversion:
console.log(message.toUpperCase()); // "HELLO"
console.log(message.toLowerCase()); // "hello"

// 5_ Slice & Substring:
let text = "TypeScript";
console.log(text.substring(0, 4)); // "Type"
console.log(text.slice(-6)); // "Script"

// 6_ Replace:
let newScript = text.replace("Type", "Java");
console.log(newScript); // "JavaScript"

// 7_ Split:
let csv = "Alireza,Mousapour,Developer";
let parts = csv.split(",");
console.log(parts); // ["Alireza", "Mousapour", "Developer"]

// 8_ Search:
console.log(csv.search("Alireza"), csv.search("Developer")); // 0 18

// 9_ Includes & StartsWith & EndsWith:
let myName = "My name is Alireza.";
console.log(myName.includes("Alireza")); // true
console.log(myName.startsWith("My")); // true
console.log(myName.endsWith(".")); // true

// 10_ trim:
let myName2 = "   My name is Alireza.   ";
console.log(myName2.trim()); // "My name is Alireza."

// 11_ Repeat:
console.log(message.repeat(3));

// 12_ Converting string to number:
let numericString = "42";
console.log(parseInt(numericString)); // 42
console.log(parseFloat("3.14")); // 3.14




// ts-node src/2/2-4.ts