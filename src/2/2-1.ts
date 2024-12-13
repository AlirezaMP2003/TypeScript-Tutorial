// شروع نام متغیر با عدد نباشد
let Name: string = "Ali";
let _privateVariable: number = 42;
let 1number: number = 10; // خطا


// کاراکتر های - و @ و # مجاز نیستند
let valid_name: string = "Valid";
let $dollarVariable: number = 50;
let invalid-name: string = "Invalid"; // خطا

// به حروف کوچک و بزرگ حساس است
let myVariable: string = "Hello";
let MyVariable: string = "World";

// استفاده از کلمات رزرو شده برای نام متغیر مجاز نیست
let let: number = 5; // خطا
let class: string = "Example"; // خطا


// ts-node src/2/2-1.ts
