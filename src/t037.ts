// 异步函数,async和await

function timeout(ms:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value:string, ms:number) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 250);

export {};
