import { useState } from 'react';
import styled from 'styled-components';
import RenderedSection from './RenderedSection';

const UseEffectDependencyPage = () => {
  const [renderedCount, setRenderedCount] = useState(0);

  const handleClickRender = () => {
    setRenderedCount((renderedCount) => renderedCount + 1);
  };

  return (
    <Container>
      <RenderedSection
        renderedCount={renderedCount}
        number={0}
        object={{ key: 'something' }}
      />
      <Button onClick={handleClickRender}>Render</Button>
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

export default UseEffectDependencyPage;
