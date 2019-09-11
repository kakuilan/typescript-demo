// 类型断言

// 形式一，尖括号语法
let someValue : any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log("strLength:", strLength);

// 形式二，as 语法
let someValue2 : any = "this is a string";
let strLength2 : number = (someValue2 as string).length;
console.log("strLength2:", strLength2);
