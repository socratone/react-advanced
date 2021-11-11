import { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import AlertModal from '../../components/modals/AlertModal';

/**
 * createPortal 함수를 쓰면 root가 아닌 별도의 엘리먼트에 렌더링을 할 수 있다.
 * index.html에 modal-root 엘리먼트를 따로 두었고
 * 아래의 모달은 modal-root에서 렌더링된다.
 * createPortal을 여러번 호출하더라도 덮어 씌우지는 않는다.
 * 이렇게 하면 root 바로 밑에 위치하기 때문에 리렌더링시 연산을 줄일 수 있다.
 */

const Portal = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>
        <Button onClick={handleClick}>모달 열기</Button>
      </Container>
      {ReactDOM.createPortal(
        <AlertModal open={open} onClose={handleClose} />,
        document.getElementById('modal-root') as HTMLElement
      )}
    </>
  );
};

const Container = styled.div`
  padding: 20px;
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

export default Portal;
