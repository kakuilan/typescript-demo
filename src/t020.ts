// 类型守护
// 在运行时使用typeof或instanceof对类型进行验证.typescript会在if区域寻找这些运算符,然后对应地更改类型

const x: any = {};
if (typeof x === "string") {
  //console.log(x.splice(3, 1)); // error,Property 'splice' does not exist on type 'string'
}

// x依然是any类型
x.foo(); //合法