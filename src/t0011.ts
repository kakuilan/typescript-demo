//for 循环
var num_0011: number = 5;
var i_0011: number;
var factorial_0011 = 1;

for (i_0011 = num_0011; i_0011 >= 1; i_0011--) {
    factorial_0011 *= i_0011;
}
console.log(factorial_0011);

//for..in 循环
var j_0011: any;
var n_0011: any = "a b c";
console.log("for..in")
for (j_0011 in n_0011) {
    console.log(n_0011[j_0011]);
}

//for..of 循环
let someArray_0011 = [1, "string", false];
console.log("for..for")
for (let entry of someArray_0011) {
    console.log(entry);
}

//forEach 循环
console.log("forEach")
let list_0011 = [4, 5, 6];
list_0011.forEach((val, idx, arr) => {
    console.log(val, idx, arr)
})

//for..every 循环
console.log("for..every")
list_0011.every((val, idx, arr) => {
    console.log(val, idx, arr);
    return true;
})
