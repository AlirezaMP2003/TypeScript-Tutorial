// Scope
// 1_ Global Scope:
let globalVar = "Global Scope";

function showGlobalVar() {
    console.log(globalVar);
}

showGlobalVar(); // Global Scope


// 2_ Local Scope:
function localScopeExample() {
    let localVar = "It is a local variable";
    console.log(localVar);
}

localScopeExample();
// متغیر درون تابع از بیرون قابل دسترسی نیست
// console.log(localVar); // خطا


// 3_ Block Scope:
if (true) {
    let blockVar = "It is a block variable";
    console.log(blockVar);
}
// متغیر درون بلوک، از بیرون بلوک قابل دسترسی نیست
// console.log(blockVar); // خطا


// 4_ Static Scope:
let outerVar = "Outer";

function outerFunction() {
    let innerVar = "Inner";

    function innerFunction() {
        console.log(outerVar); // دسترسی مجاز
        console.log(innerVar); // دسترسی مجاز
    }

    innerFunction();
}

outerFunction();


// 5_ Dynamic Scope:
// تایپ اسکریپت این قابلیت را پشتیبانی نمی کند اما می توان آنرا شبیه سازی کرد
function dynamicScopeExample(this: { name: string; fn: () => void; }) {
    console.log(this.name);
}

const obj1 = { name: "Object 1", fn: dynamicScopeExample };
const obj2 = { name: "Object 2", fn: dynamicScopeExample };

obj1.fn(); // Object 1
obj2.fn(); // Object 2






// ts-node src/2/2-3.ts
