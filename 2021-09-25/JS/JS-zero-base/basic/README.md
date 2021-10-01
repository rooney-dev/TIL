# Basic

# 1. 개요

- 객체기반의 스크립트 프로그래밍 언어
- ECMAScript 사양을 준수하는 범용 스크립팅 언어
- JS 엔진위에서 수행되며, 브라우저별로 여러 엔진 존재

## (1) ECMAScript

- ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어

# 2. 기본 입출력

- 사용자가 프로그램과 상호작용하기 위한 방법으로, 입력과 출력을 아우르는 개념
- **I/O**로 줄여서 표기

# 3. 기본용어

- JS는 문법 대부분을 C, C++, Java로부터 차용하여 제작된 스크립트 기반의 언어
- 다수의 표현식(expression)으로 하나의 명령문(statement)이 만들어지며, 명령문으로 프로그램이 수행
- 하나의 명령문 끝은 개행 문자 혹은 세미콜론으로 구별

```jsx
let 안녕 = '하세요';
let hi = 'hello';
let HI = 'HELLO';

console.log(안녕);
console.log(hi);
console.log(HI);
```

- 키워드 : 자바스크립트에서 문법을 만들 때 미리 정해진 용도로 동작하기 위해 정의해 놓은 단어

    ![keyword.png](Basic%20a38dc7a38c854d9a944d919e861d0276/keyword.png)

## (1) 식별자

- 스크립트에서 변수나 함수에 이름을 붙일 때 사용하는 단어
- 대소문자를 구별하며 유니코드 문자셋을 이용
- 규칙
    - 키워드 사용 불가
    - 숫자로 시작 불가
    - 특수 문자의 경우 `_`와`$` 만 허용
    - 공백 불가

## (2) 주석

- 실제 실행 코드에 포함되지 않음

### 단일 행 주석

```jsx
// single-line comments
```

### 다중 행 주석

```jsx
/*
multi-line comments
multi-line comments
multi-line comments
*/
```

# 4. 변수와 상수

## (1) 변수

- 변경 가능한 값을 저장하기 위한 기억 공간(memory)
- 사용하기 전 선언 필요
- 중복 선언 불가
- 키워드 : let