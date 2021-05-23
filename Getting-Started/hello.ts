// es6 이전
var hello = 'hello';
// es6 이후 모두 사용 가능하다. 
let hello2 = 'hello2';
let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1 sec');
  }, 1000);
});
timeoutPromise.then(console.log);