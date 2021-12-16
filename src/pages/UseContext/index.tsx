import { useState } from 'react';
import styled from 'styled-components';
import ColorContext from '../../store/color-context';
import Palette from './Palette';
import Picker from './Picker';

const UseContext = () => {
  const [color, setColor] = useState('dodgerblue');

  const handleChangeColor = (color: string) => {
    setColor(color);
  };

  return (
    <ColorContext.Provider
      value={{
        color: color,
        onChangeColor: handleChangeColor,
      }}
    >
      <Container>
        <Palette />
        <Picker />
      </Container>
    </ColorContext.Provider>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > *:first-child {
    margin-bottom: 10px;
  }
`;

export default UseContext;
