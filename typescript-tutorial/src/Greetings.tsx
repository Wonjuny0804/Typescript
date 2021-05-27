import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
};

// FC를 이용하면 children이 기본적으로 탑재되어 있다. 
// 또한 Greetings.하고 내장 함수같은 것들을 사용할 수 있다. 

/*
하지만 치명적인 단점은 defaultProps가 정상적으로 작동하지 않는다. 
그래서 defaultProps를 구현할때는 입력 단에서 기본값을 줘야 한다. 
 */
const Greetings: React.FC<GreetingsProps> = ({ name }) => {
  return <div>Hello, {name}!</div>
};

// 함수형 컴포넌트를 만들때는 두가지 방식이 있지만, function을 쓰는 것을 추천한다. 이럴 경우 children을 직접 써서
// children?: React.ReactNode를 꼭 해줘야 한다. 
function Greetings2({ name, mark = '!', optional, onClick }: GreetingsProps) {
  return ( <div>{name}{mark}</div>)
}

export default Greetings;