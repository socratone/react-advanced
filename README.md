# React Advanced Example

리액트 고급 기술들 예제 코드를 작성합니다.\
아래 항목들은 `/pages`에 각 페이지 컴포넌트로 나눠져 있고\
자세한 설명은 각 컴포넌트에 주석으로 적었습니다.

## React Transition Group

`react-transition-group`을 이용하면 state의 변화를 보다 세부적으로 나눠 각각에 애니메이션을 따로 넣을 수 있다.

## Portal

createPortal 함수를 쓰면 root가 아닌 별도의 엘리먼트에 렌더링을 할 수 있다.\
index.html에 modal-root 엘리먼트를 따로 두었고\
아래의 모달은 modal-root에서 렌더링된다.\
createPortal을 여러번 호출하더라도 덮어 씌우지는 않는다.\
이렇게 하면 root 바로 밑에 위치하기 때문에 리렌더링시 연산을 줄일 수 있다.

## Styled Components

스타일 컴포넌트를 이용해서 state에 따라 css class를 넣고 빼는 방법

## UseContext

## UseEffect, Debouncing

useEffect에 들어가는 함수는 side effect와 관련된다.\
react는 화면을 그리는 라이브러리이고\
화면을 그리는 데에 직접적인 영향을 주지 않는 로직은 side effect, 곧 useEffect에 넣는다.\
예를 들어 api 요청은 데이터를 side effect로 받아오는 것이지 화면을 그리는 것이 아니다.

아래는 useEffect를 이용한 debouncing 예제다.\
사용자가 입력하는 동안에는 api 요청을 하지 않는다.

## UseImperativeHandle

## UseReducer

useReducer를 이용하면 정의된 한 번의 action으로 여러 상태를 바꿀 수 있다.\
컴포넌트 내부의 로직이 간단해진다.

## SearchParams

URL의 query string을 state로 다루는 방법

## Subcomponents

서브 컴포넌트를 사용하면 props 수를 줄여 깔끔하게 할 수 있다.

## React.Children

React.Children을 이용해서 Option(child)에 prop을 넣지 않아도\
Options(parent)에서 prop을 넣을 수 있다.

## Functional Programming

함수형 프로그래밍을 생각하면서 리액트 코드를 작업하면\
보다 유지보수하기 쉬운 형태로 만들 수 있다.\
함수형 프로그래밍은 크게 액션, 계산, 데이터로 구분할 수 있다.

## Scroll Animation

framer motion을 이용해서 scroll 이벤트에 반응하는 애니메이션을 적용하는 방법