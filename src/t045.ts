// 使用bind绑定函数的this
class Person {
  public name: string;
  public surname: string;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public greet(city: string, country: string) {
    // 使用this操作符来访问实例的name和surname属性
    let msg = `Hi, my name is ${this.name} ${this.surname} . `;
    msg += `I'm from ${city} (${country}).`;
    console.log(msg);
  }
}

const one = new Person("remo", "jansen");

const greet = one.greet.bind(one);

greet.call(one, "纽约", "美国");
greet.apply(one, ["莫斯科", "俄罗斯"]);

greet.call(null, "纽约", "美国");
greet.apply(null, ["莫斯科", "俄罗斯"]);
