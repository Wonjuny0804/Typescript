// es6 이전
var hello = 'hello';
// es6 이후 모두 사용 가능하다. 
var hello2 = 'hello2';
var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('1 sec');
    }, 1000);
});
timeoutPromise.then(console.log);
