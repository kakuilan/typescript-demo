// nevel 类型,表示那些永不存在的值的类型

// 返回never的函数必须存在无法达到的终点
function error(message: string) : never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop():never {
  while(true) {
    console.log("never");
  }
}


fail();
infiniteLoop();
