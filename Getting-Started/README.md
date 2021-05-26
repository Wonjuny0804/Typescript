# Typescript Compiler

- Typescript 컴파일러 설치
```
sudo npm install -g typscript
```
- 컴파일러 실행
```
tsc greeting.ts
```

이 글을 쓰는 시점에서 Typescript버전은 4.1버전이다. 
타입스크립트는 컴파일하면서 es5형태의 자바스크립트로 트랜스파일링해준다. 

만약 이 트랜스파일링 옵션을 달리하고 싶다면 다음과 같이 컴파일 옵션을 줄 수 있다.
```
tsc greeting.ts --target es6
```
만약 Promise와 같은 새로운 문법을 쓰게되면 es5에서는 Promise라는 새로운 타입이 추가된 것이기 때문에 polyfill이라는 것이 별도로 필요하다. 


이러한 것들을 Typscript 컴파일 파일을 설정해서 매번 컴파일 할때의 옵션을 주지 않아도 된다. 

## tsconfig.json

타입스크립트 파일의 설정은 이 파일로 할 수 있다. 
작성은 다음과 같이 json형식으로 적는다. 

```
{
  "include": [
    "src/**/*.ts"
  ],
  "excludes": [
    "node_modules"
  ],
  "compilerOptions": {
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "target": "es5"
    "sourceMap": true,
    "removeComments": true,
    "noImplicitAny": true
  }
}
```
위에서 처럼 어떤 파일을 include하는지 어떤것들은 exclude하는지 알 수가 있다. 이 파일은 React에서 Typescript를 사용할 때도 쓰이니 Typescript 공식 웹에서 어떻게 작성하는지 옵션들은 뭐가 있는지 알아보는 것이 좋다.