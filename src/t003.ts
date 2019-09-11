// 元组 Tuple

//如下,定义一对值分别为string和number类型的元组
// 声明一个元组类型
let x: [string, number];

//正确的赋值
x = ['hello', 10];

//错误的赋值
//x = [10, 'world'];

// 当访问一个已知索引的元素,会得到正确的类型
console.log(x[0].substr(1)); //ok

// 错误,Property 'substr' does not exist on type 'number'
//console.log(x[1].substr(1))

// 当访问一个越界的元素,会使用联合类型替代
//x[3] = 'world'; //ok,字符串可赋值给(string|number)类型

//console.log(x[3].toString());