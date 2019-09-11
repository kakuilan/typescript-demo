// 布尔值
let isDone: boolean = false;

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o774;

// 字符串
let name: string = 'bob';
name = "smith";

name = `Gene`;
let age : number = 37;
let sentence : string = `Hello, my name is ${name},
I'll be ${age + 1} years old next month.`;

console.log(isDone);
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
console.log(name);
console.log(sentence);

export {};