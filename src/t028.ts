// 函数的可选参数
function add(foo: number, bar:number, foobar?:number) : number {
  var result = foo + bar;
  if (foobar!==undefined) {
    result += foobar;
  }

  return result;
}


add(2, 2); //ok
add(2,3,4); //ok
//add(); //error

export {}
