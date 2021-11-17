import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircularIndeterminate from '../../components/progresses/CircularIndeterminate';

const Debouncing = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (value) {
      const timer = setTimeout(() => {
        console.log('mock api 요청');
        setResult(`검색 결과 : ${value}`);
      }, 500);
      return () => {
        console.log('clear timeout');
        clearTimeout(timer);
      };
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <TextInput value={value} onChange={handleChange} />
      {value && !result && <CircularIndeterminate />}
      {value && result && <Result>{result}</Result>}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Result = styled.div``;

export default Debouncing;
