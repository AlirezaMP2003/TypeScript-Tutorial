// Exception Handling

// 1_ try-catch:
try {
    const result = JSON.parse("{invalidJson}");
    console.log(result);
} catch (error: any) { // error has type 'any' or 'unknown'
    console.error("An error occurred:", error.message);
    // console.error("An error occurred: Error");
}



// 2_ throw:
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error: any) {
    console.error(error.message); // Division by zero is not allowed.
}


// 3_ finally:
try {
    console.log("Executing...");
    throw new Error("An error occurred!");
} catch (error: any) {
    console.error(error.message);
} finally {
    console.log("Cleaning up resources...");
}



// 4_ setting type for error => type 'any' or 'unknown'


// 5_ Class Error:
class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CustomError";
    }
}

function riskyOperation(): void {
    throw new CustomError("Something went wrong in the risky operation!");
}

try {
    riskyOperation();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Custom error handled:", error.message);
    } else {
        console.error("General error:", error);
    }
}


// 6_ type never:
function throwError2(message: string): never {
    throw new Error(message);
}

function validateInput(input: number): void {
    if (input < 0) {
        throwError2("Input must be a positive number.");
    }
    console.log("Valid input:", input);
}

try {
    validateInput(-1);
} catch (error: any) {
    console.error(error.message);
}







// ts-node src/3/3-17.ts
