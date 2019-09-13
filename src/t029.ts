// 函数的默认参数
function add(foo: number, bar: number, foobar: number = 0):number {
  return foo + bar + foobar;
}

// 有剩余参数的函数
function add2(...foo: number[]):number {
  var result = 0;
  for(var i = 0;i< foo.length;i++) {
    result += foo[i];
  }
  return result;
}

console.log(add(2,3));
console.log(add(2,3,4));

console.log(add2(2, 3));
console.log(add2(2, 3, 4));
console.log(add2(2, 3, 4, 5));
