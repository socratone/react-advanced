import styled from 'styled-components';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

/**
 * 버튼을 눌러 원이 생길 때에는 css animation을 이용해 opacity 애니메이션을 주고
 * 버튼을 눌러 원이 사라질 때에는 바로 사라지지 않도록 react-transition-group 라이브러리를 사용한다.
 *
 * mountOnEnter 속성을 넣으면 in이 true로 바뀌어 애니메이션이 시작될 때 자식을 생성하고
 * unmountOnExit 속성을 넣으면 in이 false로 바뀌어 timeout만큼 지나 state가 exited이 됐을 때 자식을 없앤다.
 *
 * in이 false로 바뀌면 state가 exiting이 되는데 이 때에 opacity 애니메이션을 timeout만큼 주면
 * timeout이 끝난 다음 사라지기 때문에 자연스러운 애니메이션을 만들 수 있다.
 */
const TransitionPage = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <Container>
      <Transition in={show} timeout={1000} mountOnEnter unmountOnExit>
        {/* state는 'entering' | 'entered' | 'exiting' | 'exited' | 'unmounted의' 상태를 가짐 */}
        {(state) => (
          <>
            <div>{state}</div>
            {/* 'exiting'일 때에만 opacity를 0으로 하여 transition이 작동하도록 한다. (사라지는 애니메이션) */}
            <Circle style={{ opacity: state === 'exiting' ? 0 : 1 }} />
          </>
        )}
      </Transition>

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
  opacity: 0;

  animation: 1s ease-in fade-in;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default TransitionPage;
