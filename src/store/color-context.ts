import { createContext } from 'react';

const ColorContext = createContext({
  color: 'dodgerblue',
  onChangeColor: (color: string) => {},
});

export default ColorContext;
