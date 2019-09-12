// 匿名函数的箭头函数

var greet: (name:string) => string = function(name: string) : string {
  if (name) {
    return "Hi! "+name
  }else{
    return "Hi."
  }
}

console.log(greet('wang'))

// 强制指定形式的回调函数,如下
// callback函数仅接受一个number类型的参数,且无返回值
function sume(a: number, b: number, callback:(result:number)=>void ) {
  callback(a+b);
}

sume(11, 34, function(total:number) {
  console.log("sum total:", total)
});


export {}