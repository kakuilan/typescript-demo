// 类示例

class Email {
  private email : string;

  constructor(email: string) {
    if(this.validateEmail(email)) {
      this.email = email;
    }else{
      throw new Error('Invalid email!');
    }
  }

  private validateEmail(email:string) {
    var re = /\S+@\S+\.\S/;
    return re.test(email);
  }

  get():string {
    return this.email;
  }
}

class Person {
  public name : string;
  public surname: string;
  public email: Email;

  constructor(name: string, surname: string, email:Email) {
    this.email = email;
    this.name = name;
    this.surname = surname;

  }

  greet() {
    console.log("Hi!");
  }

}

// 继承
class Teacher extends Person {
  teach() {
    console.log('Welcome to class!');
  }
}

var teacher = new Teacher('remo', 'jansen', new Email('remo.janse@test.com'));
var me = new Person('remo', 'jasen', new Email('remo.jasen@test.com'));

me.greet();
teacher.greet();
teacher.teach();

export {};
