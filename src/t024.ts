// 类的声明
class Character {
  fullname: string;

  constructor(firstname:string, lastname:string) {
    this.fullname = firstname + " " + lastname;
  }

  greet(name?: string) {
    if (name) {
      return "Hi! "+ name+" ! My name is " + this.fullname;
    }else{
      return "Hi! my name is " + this.fullname;
    }
  }

}

var spark = new Character("Jacob", "Keyes");
var msg = spark.greet();
console.log(msg);
var msg1 = spark.greet("Dr.Halsey");
console.log(msg1);

