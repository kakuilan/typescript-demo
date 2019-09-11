// 任意值 any,允许编译时可选择地包含或移除类型检查

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

console.log(notSure);

let notSure2: any = 4;
notSure2.ifItExists(); //ok,ifItExists可能存在
notSure2.toFixed(); //ok,toFixed可能存在

// 注意Object类型的变量,只允许你给它赋任意值,但不能够调用任意的方法,即便它真的有这些方法
let prettySure: Object = 4;
//prettySure.toFixed(); //错误,Property 'toFixed' does not exist on type 'Object'

// 包含不同类型数据的数组，使用any
let list : any[] = [1, true, "free"];
list[1] = 100; //ok