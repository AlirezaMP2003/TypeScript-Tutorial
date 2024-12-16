// Closure


function outerFunc(outerVariable: string) {
    return function innerFunc(innerVariable: string) {
        console.log(`Outer: ${outerVariable}`);
        console.log(`Inner: ${innerVariable}`);
    };
}

const closureInstance = outerFunc("Hello");
closureInstance("World");
// Outer: Hello
// Inner: World





function greeting3(name: string) {
    return function(timeOfDay: string) {
        console.log(`Good ${timeOfDay}, ${name}!`);
    };
}

const morningGreet = greeting3("Amir");
morningGreet("Morning"); // Good Morning, Amir!






function multiplier(factor: number): (value: number) => number {
    return function(value: number): number {
        return value * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // 10
console.log(double(10)); // 20







// ts-node src/3/3-11.ts
