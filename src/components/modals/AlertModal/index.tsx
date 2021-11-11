import styled from 'styled-components';

type AlertModalProps = {
  open: boolean;
  onClose: () => void;
};

const AlertModal = ({ onClose, open }: AlertModalProps) => {
  return (
    <>
      {open && (
        <Background onClick={onClose}>
          <Container onClick={(event) => event.stopPropagation()}>
            <Title>버튼을 클릭했습니다.</Title>
            <Button onClick={onClose}>확인</Button>
          </Container>
        </Background>
      )}
    </>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000003c;
`;

const Container = styled.section`
  border-radius: 10px;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1``;

const Button = styled.button`
  color: white;
  background: dodgerblue;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;

export default AlertModal;
