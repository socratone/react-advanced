import { useState } from 'react';
import styled from 'styled-components';
import Counter from './Counter';

/**
 * key를 바꾸면 컴포넌트를 강제로 언마운트 후 다시 마운트 시킬 수 있다.
 * useEffect 안의 interval timer를 복잡하게 초기화할 필요없이 간단하게 처리한다.
 */
const ForceRemountPage = () => {
  const [resetCount, setResetCount] = useState(0);

  const handleClick = () => {
    setResetCount((resetCount) => resetCount + 1);
  };

  return (
    <Container>
      <Counter key={resetCount} />
      <Button onClick={handleClick}>컴포넌트 초기화</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default ForceRemountPage;
