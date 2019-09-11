// 空值 void,表示没有任何类型

// 函数没有返回值时,通常返回值类型是void
function test(): void {
  console.log('no return.')
}

// 声明一个void类型的变量没啥用,因为你只能为它赋值 undefined / null
let unusable : void = undefined;
console.log(unusable);

export { };