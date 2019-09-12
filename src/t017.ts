// 用于函数声明的解构
type C = {a:string, b?:number}
function f({a,b} : C) : void {
  //...
}

// 指定默认值
function f2({a="", b=0} = {}): void {
  //...
}

function f3({ a, b = 0 } = {a:''}): void {
  //...
}

f3({a:"yes"}); //ok, default b = 0
f3(); //ok, default to {a:""}, which then defaults b = 0
//f3({}); //err, Property 'a' is missing in type '{}' but required in type '{ a: string; b?: number | undefined; }'

export {}