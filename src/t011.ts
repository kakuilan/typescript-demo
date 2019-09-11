// var声明

function f() {
  var a = 10;
  return function g() {
    var b = a +1;
    return b;
  }
}

var g = f();
var res = g();
console.log(res); // 11

function f2() {
  var c = 1;
  c = 2;

  var b = g();
  c = 3;

  return b;

  function g() {
    return c;
  }
}

let res2 = f2();
console.log(res2); // 2

// var 的函数作用域
function f3(init: boolean) {
  if (init) {
    var x = 10;
  }
  //return x;
}

console.log(f3(true)); // 10
console.log(f3(false)); // undefined