let userName = 'Wonjun'
let hasLoggedIn = true

console.log(hasLoggedIn)

let myNumber: number = 10;
let myRegex = /foo/


const names: string[] = userName.split(' ')
const myValues: Array<number> = [1, 2, 5]

const myPerson :{
    first: string;
    last: string;
} = {
    first: 'Wonjun',
    last: 'Jang'
}

interface Person {
    first: string;
    last: string;
}


// using objects as maps
const ids: Record<number, string> = {
    10: 'a',
    20: 'b'
}

ids[30] = 'c'

if (ids[30] === 'd') {

}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v))

