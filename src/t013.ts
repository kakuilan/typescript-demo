// 重复定义及屏蔽

// var 可以多次定义
function f(x:any) {
  var x;
  var x;

  if (true) {
    var x;
  }
}

// let不允许重复定义
let x = 10;
//报错,Cannot redeclare block-scoped variable 'x'
//let x = 20; 

function f2(x:number) {
  //err,Cannot redeclare block-scoped variable 'x'
  //let x = 100;
}

function g() {
  let x = 10;
  //err,Cannot redeclare block-scoped variable 'x'
  //var x = 100;
}