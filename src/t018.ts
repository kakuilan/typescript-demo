// 展开数组
let first = [1, 2]
let second = [3, 4]
let bothPlus = [0, ...first, ...second, 5]
console.log(bothPlus)

// 展开对象
let defaults = {food:"spicy", price:"$$", ambiance:"noisy"}
let search = { ...defaults, food: "rich"}
console.log(search)

// 对象展开会丢失其方法
class C {
  p = 12;
  m() {

  }
}

let c = new C();
let clone = {...c}
console.log(clone.p); //ok
//clone.m() //error

export {}