# React Advanced Example

리액트 고급 기술들 예제 코드를 작성합니다.

## Portal

createPortal 함수를 쓰면 root가 아닌 별도의 엘리먼트에 렌더링을 할 수 있다.\
index.html에 modal-root 엘리먼트를 따로 두었고\
아래의 모달은 modal-root에서 렌더링된다.\
createPortal을 여러번 호출하더라도 덮어 씌우지는 않는다.\
이렇게 하면 root 바로 밑에 위치하기 때문에 리렌더링시 연산을 줄일 수 있다.
