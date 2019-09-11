// 数组

//方法一,在元素类型后面加上[],表示由此类型元素组成的一个数组
let list1 : number[] = [1,2,3];

//方法二,使用数组泛型,Array<元素类型>
let list2 : Array<number> = [3,4,5];

console.log(list1, list2);

export { };