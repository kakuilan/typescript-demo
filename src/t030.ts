// 函数签名
function test(name: string) : string; //重载签名
function test(age: number) : string; //重载签名
function test(single:boolean) : string; //重载签名

//实现签名
function test(value: (string|number|boolean) ):string {
  switch(typeof value) {
    case "string":
      return `My name is ${value}.`;
    case "number":
      return `I'm ${value} years old.`;
    case "boolean":
      return value ? "I'm single." : "I'm not single.";
    default:
      return "Invalid Operation!";
  }
}

console.log(test("Remo"));
console.log(test(26));
console.log(test(false));
//console.log(test({custom:"hehe"}));

export {}