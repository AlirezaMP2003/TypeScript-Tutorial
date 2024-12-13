// جاوااسکریپت و تایپ اسکریپت از اشاره گرها پشتیبانی نمی کنند


// Value Types: number, string, boolean, null, undefined
let a: number = 10;
let b: number = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

// Reference Types: Object, Array, Function
let object1 = { name: "Ali" };
let object2 = obj1;
obj2.name = "Reza"; // مقدار ذخیره شده در شیء اول نیز تغییر می کند

console.log(object1.name); // "Reza"
console.log(object2.name); // "Reza"


// جلوگیری از این اتفاق
let obj11 = { name: "Ali" };
let obj22 = { ...obj1 }; // کپی مستقل

obj2.name = "Reza";

console.log(obj11.name); // "Ali"
console.log(obj22.name); // "Reza"




// ts-node src/2/2-7.ts