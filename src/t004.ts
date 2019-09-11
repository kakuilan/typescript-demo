// 枚举 enum类型
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// 默认从0开始为元素编号
console.log(c) //将打印1

//或者手动指定成员的数值
enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;

console.log(c2); //将打印2

