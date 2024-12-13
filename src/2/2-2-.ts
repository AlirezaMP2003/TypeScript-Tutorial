// Type Binding
// 1_ Static Type Binding:
let age: number = 25; // نوع متغیر در زمان کامپایل مشخص است
age = "Hello"; // خطا

// 2_ Dynamic  Type Binding:
let data: any = 25; // ابتدا نوع عددی دارد
data = "Hello"; // نوع از عدد به رشته تغییر می کند

// 3_ Explicit Type Binding:
let username: string = "Ali";
let isAdmin: boolean = true; // نوع متغیر ها به طور صریح مشخص شده است

// 4_ Implicit  Type Binding:
let score = 100; // نوع متغیر را عدد تشخیص می دهد
score = "High"; // خطا



// ts-node src/2/2-2.ts