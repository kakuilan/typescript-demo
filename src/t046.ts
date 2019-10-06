// 原型的继承

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

class SuperHero extends Person {
  public superpower: string;

  constructor(name: string, surname: string, superpower: string) {
    super(name, surname);
    this.superpower = superpower;
  }

  userSuperPower() {
    return `I'm using my ${this.superpower}`;
  }
}
