import { useMemo, useState } from 'react';
import styled from 'styled-components';
import ReactMemoComponent from './ReactMemoComponent';

const UseMemoDependencyPage = () => {
  console.log('render page');

  const [renderedCount, setRenderedCount] = useState(0);

  const handleClickRender = () => {
    setRenderedCount((renderedCount) => renderedCount + 1);
  };

  const memorizedObject = useMemo(() => {
    return { label: 'memorized' };
  }, []);

  const object = { label: 'unmemorized' };

  return (
    <Container>
      <div>rendered count : {renderedCount}</div>
      <ReactMemoComponent object={memorizedObject} />
      <ReactMemoComponent object={object} />
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

export default UseMemoDependencyPage;
