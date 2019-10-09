// 静态变量

class Counter {
  private static _COUNTER = 0;

  private _changeBy(val) {
    Counter._COUNTER += val;
  }

  public increment() {
    this._changeBy(1);
  }

  public decrement() {
    this._changeBy(-1);
  }

  public value() {
    return Counter._COUNTER;
  }
}
