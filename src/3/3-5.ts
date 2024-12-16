// Conditions

// 1_ if else:
let age5 = 20;
if (age5 < 18) {
    console.log("You are a minor.");
} else if (age5 === 18) {
    console.log("You are exactly 18.");
} else {
    console.log("You are an adult.");
}


// 2_ switch:
let day = "Saturday";
switch (day) {
    case "Saturday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the week.");
        break;
    default:
        console.log("It's a regular day.");
}

// 3_ Ternary operator:
let isEven = 12 % 2 == 0 ? console.log("It is an even number") : console.log("It is an odd number");







// ts-node src/3/3-5.ts
