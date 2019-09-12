// 匿名函数的箭头函数

var greet: (name:string) => string = function(name: string) : string {
  if (name) {
    return "Hi! "+name
  }else{
    return "Hi."
  }
}

console.log(greet('wang'))

export {}