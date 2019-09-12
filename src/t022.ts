// 迭代对象的属性,for...in
// for...in语句会沿着对象的原型链迭代,枚举出包括继承的属性的所有属性
var obj : any = {a:1, b:2, c:3}
for (var key in obj) {
  console.log(key + " = " + obj[key])
}

// 若只想枚举对象自己的属性(非继承属性),可在循环里使用hasOwnProperty方法
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + " = " + obj[key])
  }
}

export {}