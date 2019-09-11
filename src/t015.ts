// 解构数组

//解构赋值
let input = [1, 2];
let [first, second] = input;

// 相当于
let first2 = input[0];
let second2 = input[1];

[first, second] = [first2, second2];

console.log(first);
console.log(second);