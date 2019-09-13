// 立即调用函数

var bar = 0; //全局
(function (global) {
  console.log('global', global);
  var foo : number = 0; //在函数作用域中
  bar = 1; //在全局作用域中
  //console.log(global.bar);
  console.log(foo);
})(this);

console.log(bar);
//console.log(foo); //error

export {}