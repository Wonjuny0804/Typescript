// 6 primitive types
let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;

numValue = 3.3;
numValue = 5;
numValue = -2;

stringValue = 'Hello';
stringValue = 3; // error
stringValue = `${numValue}`;
stringValue = `
hello
hi
`

booleanValue = true;
undefinedValue = null; // undefined에 null이 가능하다
nullValue = null;
nullValue = undefined;

objValue = { name: 'jun' };
objValue = {};
objValue = new String(33);

symbolValue = Symbol();


//  배열 정의하기
let nameList: string[];
nameList.push('june');
nameList.push('seok');
nameList.push(3); // error


// 인라인 타입

let user1: { name: string, score: number };
user1 = { 
  name: 'June',
  score: 90
}
user1 = { 
  name: 'June',
  score: '90'
} // error

// 재사용이 되는 타입은 인라인으로 정의하지 않고 interface나 type으로 
// 정의한다. 

// Tuple

let tuple2: [number, string];
tuple2 = []; // error
tuple2 = [1, "hello"]; // done
let tuple3: [number, number, number];
tuple2 = [1, 'June'];
tuple3 = [1, 2, 3];