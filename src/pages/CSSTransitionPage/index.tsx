import styled from 'styled-components';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

/**
 * classNames를 사용하면 애니메이션의 진행 흐름 각각에 css class를 넣을 수 있다.
 */
const CSSTransitionPage = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <Container>
      <CSSTransition
        in={show}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: 'enter',
          enterActive: 'active-enter',
          enterDone: 'done-enter',
          exit: 'exit',
          exitActive: 'active-exit',
          exitDone: 'done-exit',
        }}
      >
        <Circle />
      </CSSTransition>

      <Button onClick={handleClick}>클릭</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: tomato;
  transition: all 1s ease-in;

  &.enter {
    opacity: 0;
  }

  &.active-enter {
    opacity: 1;
  }

  &.done-enter {
    opacity: 1;
  }

  &.active-exit {
    opacity: 0;
  }
`;

export default CSSTransitionPage;
