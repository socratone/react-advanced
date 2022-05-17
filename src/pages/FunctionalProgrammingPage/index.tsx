import { useState } from 'react';
import styled from 'styled-components';

/**
 * 함수형 프로그래밍을 생각하면서 리액트 코드를 작업하면
 * 보다 유지보수하기 쉬운 형태로 만들 수 있다.
 * 함수형 프로그래밍은 크게 액션, 계산, 데이터로 구분할 수 있다.
 *
 * https://velog.io/@teo/functional-programming
 */
const FunctionalProgrammingPage = () => {
  // 데이터
  const [count, setCount] = useState(0);

  // 계산
  // 순수 함수로서 주어진 인풋을 계산해 아웃풋을 내놓고 count와 같은 외부 값은 일체 관여하지 않는다.
  // 이렇게 계산하는 식만 따로 빼면 재사용도 가능하고 다른 곳에 따로 모아 놓을 수도 있다.
  const increase = (value: number) => value + 1;

  // 액션
  const onClick = () => setCount(increase(count));

  return (
    <Container>
      <Text>{count}</Text>
      <Button onClick={onClick}>클릭</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Text = styled.p`
  margin-top: 0;
`;

const Button = styled.button`
  color: white;
  background: dodgerblue;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;

export default FunctionalProgrammingPage;
