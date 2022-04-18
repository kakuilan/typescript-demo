//构造函数
var myFunc_0013 = new Function("a", "b", "return a * b");
var x_0013 = myFunc_0013(4, 3);
console.log(x_0013);

//lambda函数
var foo_0013 = (x: number) => 10 + x;
console.log(foo_0013(100));

//函数重载
function disp_0013(s1: string): void;
function disp_0013(n1: number, s1: string): void;
function disp_0013(x: any, y?: any): void {
    console.log(x, y);
}

disp_0013("abc");
disp_0013(1, "xyz");
