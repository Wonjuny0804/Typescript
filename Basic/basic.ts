// 타입스크립트의 변수 선언 방식
/*
변수는 기본적으로 자바스크립트와 똑같이 선언할 수 있다. 
*/

var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
  
  function inner() {
    var score = 0;
  }


  console.log(score); // error
  // var 변수는 함수 스코프만 존재한다. => JS Basics
}

function outer1() {

  if (true) {
    let score = 0;
  }

  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }

  console.log(score); // error 
  // let은 {} 단위 스코프를 가진다. 블록 스코프를 가짐
}

function outer2() {

  if (true) {
    const score = 100; // score는 number타입의 상수이다. 
  }

  console.log(score); // let과 같이 블록단위 스코프를 가지므로 error
}

