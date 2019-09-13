// 类的私有变量
class Counter {
  private _i : number;

  constructor() {
    this._i = 0;
  }

  get() : number {
    return this._i;
  }

  set(val:number):void{
    this._i = val;
  }

  increment():void{
    this._i++;
  }

}

var counter = new Counter();
console.log(counter.get());
counter.set(2);
console.log(counter.get());
counter.increment();
console.log(counter.get());
//console.log(counter._i); //error
export { }