// 类的混合

// 动物
class Animal {
  eat() {
    console.log("eating...");
  }
}

// 哺乳动物
class Mammal extends Animal {
  breathe() {
    const msg = "I`m alive!";
    return msg;
  }
}

// 飞行动物
class WingedAnimal extends Animal {
  fly() {
    const msg = "I can fly!";
    return msg;
  }
}

// 蝙蝠
// implements,实现
class Bat implements Mammal, WingedAnimal {
  breathe: () => string;
  fly: () => string;
}

// 该函数会迭代所有父类的属性(存储到baseCtors数组中),然后将它们的实现复制到子类中(derivedCtor)
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      if (name !== "constructor") {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

applyMixins(Bat, [Mammal, WingedAnimal]);

const bat = new Bat();
console.log(bat.breathe());
console.log(bat.fly());

export {};
