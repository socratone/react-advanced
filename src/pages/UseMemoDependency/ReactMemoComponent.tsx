import styled from '@emotion/styled';
import { memo } from 'react';

type ReactMemoComponentProps = {
  object: { label: string };
};

const ReactMemoComponent = ({ object }: ReactMemoComponentProps) => {
  console.log(`render ${object.label}`);

  return (
    <Container>
      <Title>{object.label}</Title>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid gray;
`;

const Title = styled.h1`
  margin: 0;
  text-transform: capitalize;
`;

export default memo(ReactMemoComponent);
