// 使用接口,来确保类拥有指定的解构
interface LoggerInterface {
  log(arg: any) : void;
}

class Logger implements LoggerInterface {
  log(arg) {
    if (typeof console.log === "function") {
      console.log(arg);
    }else{
      alert(arg);
    }
  }
}

var obj = new Logger()
obj.log("heheh")
