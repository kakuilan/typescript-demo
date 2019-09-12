// 联合类型

var path : string[]|string;

path = '/temp/log.xml';
path = ['/tmp/log.xml', '/tmp/error.xml']

console.log(path) // ok

//path = 12; //error

export {}