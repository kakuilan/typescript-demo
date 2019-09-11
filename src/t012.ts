// let 声明,块作用域

function f(input: boolean) {
  let a = 100;
  if (input) {
    let b = a +1;
    return b;
  }

  // 错误,b在这里不存在
 //return b;
 return a;
}

f(false);

// catch 语句里声明的变量也是块作用域
try {
  throw "oh no!";
}catch(e) {
  console.log("Oh well.");
}

// 错误,Cannot find name 'e'
//console.log(e);


export {};