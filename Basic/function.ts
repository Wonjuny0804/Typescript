function add(x: number, y: number) {
  return x + y;
}
// 직접적으로 반환되는 타입을 명시하지 않아도
// 함수 바디를 보고 typescript가 알아서 결정한다. 

// 다음과 같이 명시적으로 선언할 수도 있다. 
function add2(x: number, y: number): number {
  return x + y;
}

function buildUserInfo(name?: string, email?: string) {
  return { name, email };
}
const user = buildUserInfo();
// 화살표 함수
const add3 = (a: number, b: number): number => a + b;

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}
// 함수 시그니처, 함수 오버로딩 시그니쳐
function store(type: '통조림'): Storage
function store(type: '아이스크림'): ColdStorage

// 유니언 타입이라고 한다.
function store(type: '통조림' | '아이스크림') {
  if (type === '통조림') {
    return { a: '통조림'} 
  } else if (type === '아이스크림') {
    return { b: '아이스크림' }
  } else {
    throw new Error('unsupported type');
  }
}

const s = store('아이스크림');
s.b