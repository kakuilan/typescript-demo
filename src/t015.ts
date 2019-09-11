// 解构数组

//解构赋值
let input: [number, number] = [1, 2];
let [first, second] = input;

// 相当于
let first2 = input[0];
let second2 = input[1];

[first, second] = [first2, second2];

console.log(first);
console.log(second);

//作用于函数参数
function f([first, second] : [number, number]) {
  console.log(first)
  console.log(second)
}
f(input)

// 使用...语法创建剩余变量
let [fir2, ...rest] = [1, 2, 3, 4];
console.log("fir2", first)
console.log("rest", rest)

// 或忽略尾随的元素
let [fir3] = [1,2,3,4];
console.log("fir3", fir3)

// 或取特定位置的元素
let [, sec4, , for4] = [1,2,3,4]
console.log("sec4", sec4)
console.log("for4", for4)

export { };