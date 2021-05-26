interface Person {
  name: string;
  say(): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}

// 다중 상속 인터페이스는 이렇게 구현한다...
abstract class KoreanProgrammer implements Person, Programmer {

  constructor(public name: string) {
  }

  say(): void {
    console.log('hi');
  }

  writeCode(requirement: string): string {
    console.log(requirement);
    return requirement + '....';
  }

  loveKimchi() {
    console.log('love~ kimchi~');
  }
}

const jay = new KoreanProgrammer('jay');

// 추상 클래스의 구현은 다음과 같이 한다.

// 추상 클래스의 경우 상위에서 abstract로 이름과 타입만 지정하고 하위에서 상속받은 클래스가 만들어야 한다. 

abstract class Korean implements Person {
  constructor(public name: string) {

  }

  say(message: string): void {
    console.log(message);
  }

  abstract lovekimchi(): void;

}