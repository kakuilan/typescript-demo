// 生成器基本例子

// 生成器的构造函数
function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

// 迭代器
var bar = foo();
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());
console.log(bar.next());

// 结果如下
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// { value: undefined, done: true }