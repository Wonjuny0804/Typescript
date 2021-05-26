// interface는 C에서의 구조체와 비슷하고 클래스와 비슷하다
// 인터페이스는 어떠한 행위를 한다. 행위 => 메서드
var myTV = {
    turnOn: function () {
        return true;
    },
    turnOff: function () {
    }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTV);
function createBoard() {
    var cells = [];
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            cells.push({
                row: row,
                column: col
            });
        }
    }
    return cells;
}
var board = createBoard();
board[0].piece = {
    move: function (from, to) {
        return true;
    }
};
