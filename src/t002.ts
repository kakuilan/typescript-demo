// 接口初探
function printLabel0(labeledObj: { label: string }) {
    console.log(labeledObj.label)
}

let myObj0 = {size: 10, label: "Size 10 object"}
printLabel0(myObj0)

//使用接口来描述
interface LabeledValue {
    label: string
}

function printLabel1(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}

let myObj1 = {size: 10, label: "Size 10 object"}
printLabel1(myObj1)
