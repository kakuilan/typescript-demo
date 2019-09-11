// 循环中的变量声明

// var
for(var i=0;i<10;i++) {
  setTimeout(function () {
    console.log("var in for[err]:", i);
  }, 10 * 1);
}

for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("var in for[ok]:", i);
    }, 10 * 1);
  })(i);
}

// let声明出现在循环体时,针对每次迭代都会创建一个新作用域
for (let i=0;i<10;i++) {
  setTimeout(function () {
    console.log("let in for[ok]:", i);
  }, 10 * 1);
}

export { };