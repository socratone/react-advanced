import { useContext } from 'react';
import styled from 'styled-components';
import ColorContext from '../../store/color-context';

const Palette = () => {
  const { color } = useContext(ColorContext);

  return <Container style={{ background: color }}></Container>;
};

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

export default Palette;
