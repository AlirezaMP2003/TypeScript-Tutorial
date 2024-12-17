// Concurrency

// 1_ Callback:
function fetchData(callback: (data: string) => void): void {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Data received
});



// 2_ Promise:
function fetchData2(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

fetchData2().then((data) => {
    console.log(data); // Data received
}).catch((error) => {
    console.error(error);
});



// 3_ async/await:
async function fetchData3(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function processData(): Promise<void> {
    try {
        const data = await fetchData3();
        console.log(data); // Data received
    } catch (error) {
        console.error(error);
    }
}

processData();





// 4_ Generators:
function* generatorFunction() {
    yield "Step 1";
    yield "Step 2";
    return "Done";
}

const generator = generatorFunction();

console.log(generator.next().value); // Step 1
console.log(generator.next().value); // Step 2
console.log(generator.next().value); // Done







// ts-node src/3/3-15.ts
