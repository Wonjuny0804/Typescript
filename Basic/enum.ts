// enum은 열거형이다.
// enum은 순서가 있다.
// 또한 값을 할당할 수 있다. 

enum example {
  first = 1,
  second = '2',
  third = 'third'
}

enum StarbucksGrade {
  WELCOME,
  GREEN, 
  GOLD
}

function getDiscound(v: StarbucksGrade): number {
  switch (v) {
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

console.log(getDiscound(StarbucksGrade.GREEN));