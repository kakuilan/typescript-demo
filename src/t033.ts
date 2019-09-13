// 使用范型,避免代码重复
//declare var require: any
const  fetch = require('node-fetch');

class User {
  //不进行初始赋值的话,会提示错误Property xx has no initializer and is not definitely assigned in the constructor
  name : string = "";
  age : number = 0;
}

class Order {
  id : number = 0;
  total : number = 0;
  items : any[] = [];
}

const baseUrl:string = "http://test.com/"

function getEntities<T>(url:string, cb:(list: T[])=>void) : void {
  fetch(baseUrl + url)
    //指定response类型为any,否则提示 Parameter 'response' implicitly has an 'any' type
    .then((response: any) => {
      response.json().then((data: any) => {
      cb(data.items);
    }).catch((error: Error) => {
      console.log('jsondecode has error', error);
    });
  })
  .catch((error:Error) => {
    console.log('request has error', error);
  });
}

getEntities<User>('/api/users', function(users: User[]) {
  for(var i=0; i<users.length; i++) {
    console.log('user callback:', users[i].name);
  }
});

// getEntities<Order>('/api/users', function (orders: Order[]) {
//   for (var i; orders.length; i++) {
//     console.log('order callback:', orders[i].total);
//   }
// }

export {}