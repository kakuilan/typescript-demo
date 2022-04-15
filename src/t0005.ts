//接口-函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}

//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
let mySear2: SearchFunc
mySear2 = function (src: string, sub: string): boolean {
    let res = src.search(sub)
    return res > -1
}
