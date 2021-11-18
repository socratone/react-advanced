import { useState } from 'react';
import styled from 'styled-components';

/**
 * 스타일 컴포넌트를 이용해서 state에 따라 css class를 넣고 빼는 방법
 */

const StyledComponents = () => {
  const [pressed, setPressed] = useState(false);

  const handleClick = () => setPressed((pressed) => !pressed);

  return (
    <Container>
      <Button className={pressed ? 'pressed' : ''} onClick={handleClick}>
        클릭
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 15px;
  background: dodgerblue;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  transition: 0.3s all;

  &.pressed {
    background: darkblue;
  }
`;

export default StyledComponents;
