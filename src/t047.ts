// 原型链

class Base {
  public method1() {
    return 1;
  }

  public method2() {
    return 2;
  }
}

class Derived extends Base {
  public method2() {
    return 3;
  }

  public method3() {
    return 4;
  }
}

const derived = new Derived();
console.log(derived.method1());
console.log(derived.method2());
