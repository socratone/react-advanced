import React, { useRef, useState } from 'react';
import Input, { InputRef } from './Input';

const UseImperativeHandle = () => {
  const inputRef = useRef<InputRef>(null);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    inputRef.current?.activate();
  };

  return (
    <div>
      <Input ref={inputRef} value={value} onChange={handleChange} />
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default UseImperativeHandle;
