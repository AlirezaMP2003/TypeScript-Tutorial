// Generic Functions


function identity2<T>(value: T): T {
    return value;
}
let autoIdentity = identity2("TypeScript");
console.log(autoIdentity); // TypeScript




function pair<T, U>(key: T, value: U): [T, U] {
    return [key, value];
}
let result2 = pair<string, number>("Age", 30);
console.log(result2); // ["Age", 30]





function getFirst<T>(array: T[]): T {
    return array[0];
}
console.log(getFirst<number>([1, 2, 3])); // 1
console.log(getFirst<string>(["A", "B", "C"])); // A






// ts-node src/3/3-9.ts
