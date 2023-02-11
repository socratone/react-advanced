import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';

/**
 * URL의 query string을 state로 다루는 방법
 */
const SearchParamsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState(searchParams.get('keyword') ?? '');
  const debouncedValue = useDebounce(value);

  // deboucedValue가 달라지면 query에 적용
  useEffect(() => {
    setSearchParams(
      { keyword: debouncedValue ? debouncedValue : [] },
      { replace: true } // true로 해야 뒤로 가기를 했을 때 앞으로 가기가 없어지는 등의 버그가 발생하지 않는다. 대신 params 각각의 변화는 history에 기록되지 않는다.
    );
  }, [debouncedValue, setSearchParams]);

  // query가 달라지면 value에 적용
  useEffect(() => {
    setValue(searchParams.get('keyword') ?? '');
  }, [searchParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <input value={value} onChange={handleChange} />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default SearchParamsPage;
