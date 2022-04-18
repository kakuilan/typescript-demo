//函数-可选参数
function buildName_0012_0(firstName: string, lastName?: string): string {
    return firstName + " " + lastName;
}

let result_0012_0 = buildName_0012_0("Bob");
let result_0012_1 = buildName_0012_0("Bob", "Adams");
console.log(result_0012_0, result_0012_1);

//函数-默认参数
function calculate_discount_0012(price: number, rate: number = 0.5): number {
    return price * rate;
}

console.log(calculate_discount_0012(1000));
console.log(calculate_discount_0012(1000, 0.32));

//函数-剩余参数
function buildName_0012_1(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

let employeeName_0012 = buildName_0012_1("Joseph", "Samuel", "Lucas", "Mackinzie");
console.log(employeeName_0012)
