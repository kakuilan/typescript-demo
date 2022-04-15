//基础类型

//布尔值
let isDone: boolean = false

//数值
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octaLiteral: number = 0o744
// @ts-ignore
let bigLiteral: bigint = 100n

//字符串
let nameTest: string = "bob"
nameTest = "smith"

//模板字符串
let age: number = 38
let sentence: string = `Hello, my name is ${nameTest}.

I'll be ${age + 1} years old next month.
`

//数组
let listArr1: number[] = [1, 2, 3]
let listArr2: Array<number> = [3, 4, 5, 6]

//元组
let tupArr1: [string, number]
tupArr1 = ['hello', 10]
console.log(tupArr1[0].length)

//枚举
enum Color0 {Red, Green, Blue}

enum Color1 {Red = 1, Green = 2, Blue = 4}

let c: Color1 = Color1.Green

let colorName: string = Color0[2]
console.log('color:', c, colorName)

//未知类型
let notSure: unknown = 4
notSure = "maybe a string instead"
notSure = false
console.log('notSure`s type:', typeof notSure)

//任意类型
let notSure2: any = 4
notSure2.ifItExists() // okay, ifItExists might exist at runtime
notSure2.toFixed() // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4
//prettySure.toFixed() // Error: Property 'toFixed' doesn't exist on type 'Object'.

//空类型
let unusable: void = undefined

//Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

//从不
//返回never的函数必须存在无法达到的终点
function error(message:string):never {
    throw new Error(message)
}

//推断的返回值类型为never
function fail() {
    return error("Something failed")
}

//返回never的函数必须存在无法达到的终点
function infiniteLoop():never {
    while (true) {

    }
    fail()
}

//类型断言
//“尖括号”语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//as语法
let someValue2: any = "this is a string";
let strLength2: number = (someValue as string).length;
