//接口-可索引类型

interface StringArray {
    [intdex: number]: string
}

let myArray: StringArray
myArray = ["Bob", "Fred"]
let myStr: string = myArray[0]

//索引签名设置为只读
interface ReadonlyStringArray {
    readonly [index: number]: string
}

let myArr: ReadonlyStringArray = ["Alice", "Bob"]
//myArr[2] = "Mallory" //error
