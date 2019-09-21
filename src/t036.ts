// 无限循环的生成器

// 生成器的构造函数
function* foo () {
  var i = 1;
  while(true) {
    yield i++;
  }
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
// { value: 6, done: false }

export {};
