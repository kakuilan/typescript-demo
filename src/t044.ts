// 使用call和apply

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

const person = new Person("remo", "jansen");
person.greet("Seville", "spain");

// call,apply
person.greet.call(Person, "cityAa", "natioinAa");
person.greet.apply(Person, ["cityBb", "nationBb"]);

// 下面的将报错
// person.greet.call(null, "cityAa", "natioinAa");
// person.greet.apply(null, ["cityBb", "nationBb"]);
