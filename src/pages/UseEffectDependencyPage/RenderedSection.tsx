import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

type RenderedSectionProps = {
  renderedCount: number;
  number: number;
  object: { key: string };
};

/**
 * useEffect의 dependency 비교
 */
const RenderedSection = ({
  renderedCount,
  number,
  object,
}: RenderedSectionProps) => {
  const [numberCallbackCount, setNumberCallbackCount] = useState(0);
  const [objectCallbackCount, seObjectCallbackCount] = useState(0);

  useEffect(() => {
    setNumberCallbackCount((count) => count + 1);
  }, [number]);

  useEffect(() => {
    seObjectCallbackCount((count) => count + 1);
  }, [object]);

  return (
    <Container>
      <Title>Rendered Section</Title>
      <Text>rendered count : {renderedCount}</Text>
      <Text>
        number를 dependency로 하는 useEffect의 callback count :{' '}
        {numberCallbackCount}
      </Text>
      <Text>
        object를 dependency로 하는 useEffect의 callback count :{' '}
        {objectCallbackCount}
      </Text>
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
`;

const Text = styled.p`
  margin: 0;
`;

export default RenderedSection;
