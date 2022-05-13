import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CircularIndeterminate from '../../components/progresses/CircularIndeterminate';

/**
 * useEffect에 들어가는 함수는 side effect와 관련된다.
 * react는 화면을 그리는 라이브러리이고
 * 화면을 그리는 데에 직접적인 영향을 주지 않는 로직은 side effect, 곧 useEffect에 넣는다.
 * 예를 들어 api 요청은 데이터를 side effect로 받아오는 것이지 화면을 그리는 것이 아니다.
 *
 * 아래는 useEffect를 이용한 debouncing 예제다.
 * 사용자가 입력하는 동안에는 api 요청을 하지 않는다.
 */

const UseEffectAndDebouncingPage = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (value) {
      const timer = setTimeout(() => {
        console.log('api 요청');
        setResult(`검색 결과 : ${value}`);
      }, 500);
      return () => {
        // 다음 useEffect의 함수가 실행되기 직전에 실행, 또는 unmount시
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

export default UseEffectAndDebouncingPage;
