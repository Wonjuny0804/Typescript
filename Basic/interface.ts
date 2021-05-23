// interface는 C에서의 구조체와 비슷하고 클래스와 비슷하다

// TV interface를 만들어보자
// 안에 있는 메서드는 바디가 없이 이름만 선언된다. 
interface TV {
  turnOn(): boolean; // 반환 값이 boolean이다.
  turnOff(): void; // 반환 값이 void이다.
}

// 인터페이스는 어떠한 행위를 한다. 행위 => 메서드
const myTV: TV = {
  turnOn() {
    return true;
  },
  turnOff() {

  }
};

function tryTurnOn(tv: TV) {
  tv.turnOn();
}
tryTurnOn(myTV);


// 타입스크립트에서 가장 많이 interface를 쓰는 방식은 다음과 같다. 
interface Cell {
  row: number;
  column: number;
  piece?: Piece; // 이 속성은 옵셔널이다. 있어도되고 없어도 된다. ?
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({
        row,
        column: col
      })
    }
  }
  return cells;
}

const board = createBoard();
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  }
}

interface SignUp {
  email: string;
  id: string;
  password: string;
}

function ajaxSignup(data: SignUp) {
}
const user2: SignUp = {
  email: 'user2@email.com',
  id: 'user2',
  password: 'user2user2'
}

ajaxSignup(user2);