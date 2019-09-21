// promise基本语法

function foo() {
  return new Promise((fulfill,reject) => {
    try {
      fulfill('success');
    }catch(e) {
      reject('something wrong');
    }
  });
}

foo().then(function(value) {
  console.log('value:', value);
}).catch(function(e) {
  console.log('error:', e);
});

export {}