// 在范型约束中使用多重类型

interface MyInterface {
  doSomething: () => void;
}

interface MySecondInterface {
  doSomethingElse: () => void;
}

// 将多种类型,转变为一个超接口
interface ChildInterface extends MyInterface, MySecondInterface {}

// 然后使用ChildInterface来定义范型约束
class Example<T extends ChildInterface> {
  private genericProperty: T;

  useT() {
    this.genericProperty.doSomething();
    this.genericProperty.doSomethingElse();
  }
}
