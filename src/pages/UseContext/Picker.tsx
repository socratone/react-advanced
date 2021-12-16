import styled from 'styled-components';
import { useContext } from 'react';
import ColorContext from '../../store/color-context';

const Picker = () => {
  const { onChangeColor } = useContext(ColorContext);

  return (
    <Container>
      <Circle
        color="dodgerblue"
        onMouseEnter={() => onChangeColor('dodgerblue')}
      />
      <Circle color="tomato" onMouseEnter={() => onChangeColor('tomato')} />
      <Circle color="gold" onMouseEnter={() => onChangeColor('gold')} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Circle = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.color};
  cursor: pointer;
`;

export default Picker;
