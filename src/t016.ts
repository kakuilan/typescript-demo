// 对象解构

let obj1 = {
  a1:"foo",
  b1:12,
  c1:"bar"
};
let {a1, b1 } = obj1;
console.log("a1", a1);
console.log("b1", b1);

// 使用 ... 语法创建剩余变量
let obj2 = {
  a2: "foo",
  b2: 12,
  c2: "bar"
};
let {a2, ...passthrough } = obj2;
let total = passthrough.b2 + passthrough.c2.length;
console.log(a2, total);

// 属性重命名
let {a2: newName1, b2: newName2} = obj2;
console.log(newName1, newName2);

// 默认值可让你在属性为undefined时使用缺省值
let { c2, d2=1001 } = obj2;
console.log(c2, d2);