# React Advanced Example

리액트 고급 기술들 예제 코드를 작성합니다.

## Portal

createPortal 함수를 쓰면 root가 아닌 별도의 엘리먼트에 렌더링을 할 수 있다.\
index.html에 modal-root 엘리먼트를 따로 두었고\
아래의 모달은 modal-root에서 렌더링된다.\
createPortal을 여러번 호출하더라도 덮어 씌우지는 않는다.\
이렇게 하면 root 바로 밑에 위치하기 때문에 리렌더링시 연산을 줄일 수 있다.

## UseEffect, Debouncing

useEffect에 들어가는 함수는 side effect와 관련된다.\
react는 화면을 그리는 라이브러리이고\
화면을 그리는 데에 직접적인 영향을 주지 않는 로직은 side effect, 곧 useEffect에 넣는다.\
예를 들어 api 요청은 데이터를 side effect로 받아오는 것이지 화면을 그리는 것이 아니다.

아래는 useEffect를 이용한 debouncing 예제다.\
사용자가 입력하는 동안에는 api 요청을 하지 않는다.

## Style Components

스타일 컴포넌트를 이용해서 state에 따라 css class를 넣고 빼는 방법
