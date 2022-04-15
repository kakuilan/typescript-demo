//基础类型

//数值
let binaryLiteral_0009: number = 0b1010; // 二进制
let octalLiteral_0009: number = 0o744;    // 八进制
let decLiteral_0009: number = 6;    // 十进制
let hexLiteral_0009: number = 0xf00d;    // 十六进制

//字符串
let name_0009: string = "Runoob";
let years_0009: number = 5;
let words_0009: string = `您好，今年是 ${name_0009} 发布 ${years_0009 + 1} 周年`;

//布尔
let flag_0009: boolean = true;

//数组
// 在元素类型后面加上[]
let arr_0009_0: number[] = [1, 2];
// 或者使用数组泛型
let arr_0009_1: Array<number> = [1, 2];

//元组
let x_0009: [string, number];
x_0009 = ['Runoob', 1];    // 运行正常
//x_0009 = [1, 'Runoob'];    // 报错
console.log(x_0009[0]);    //

//枚举
enum Color_0009 {Red, Green, Blue};
let c_0009: Color_0009 = Color_0009.Blue;
console.log(c_0009);    // 输出 2

//void
function hello_0009(): void {
    console.log("Hello World");
}

//任意类型
let x_0009_1: any = 1;    // 数字类型
x_0009_1 = 'I am who I am';    // 字符串类型

x_0009_1 = false;    // 布尔类型
x_0009_1.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
x_0009_1.toFixed();    // 正确

let arrayList_0009: any[] = [1, false, 'fine'];
arrayList_0009[1] = 100;

//null和undefined
let x_0009_2: number;
x_0009_2 = 1; // 运行正确
//x_0009_2 = undefined;    // 运行错误
//x_0009_2 = null;    // 运行错误

//支持多种类型
let x_0009_3: number | null | undefined;
x_0009_3 = 1; // 运行正确
x_0009_3 = undefined;    // 运行正确
x_0009_3 = null;    // 运行正确

//never
let x_0009_4: never;
let y_0009: number;

// 运行错误，数字类型不能转为 never 类型
//x_0009_4 = 123;

// 运行正确，never 类型可以赋值给 never类型
x_0009_4 = (() => {
    throw new Error('exception')
})();

// 运行正确，never 类型可以赋值给 数字类型
y_0009 = (() => {
    throw new Error('exception')
})();

// 返回值为 never 的函数可以是抛出异常的情况
function error_0009(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop_0009(): never {
    while (true) {
    }
}
