import { TextField } from '@mui/material';
import React, { useReducer } from 'react';
import styled from 'styled-components';

/**
 * useReducer를 이용하면 정의된 한 번의 action으로 여러 상태를 바꿀 수 있다.
 * 컴포넌트 내부의 로직이 간단해진다.
 * state가 서로 연관돼 있거나 너무 복잡해지면 사용해보자.
 */

type NameState = {
  value: string;
  error: string;
};

type NameAction = {
  type: string;
  value: string;
};

type NameReducer = (state: NameState, action: NameAction) => NameState;

const nameReducer: NameReducer = (state, action) => {
  const { value } = action;
  if (action.type === 'INPUT') {
    return {
      value,
      error: value.length > 3 ? '3글자를 넘으면 안 됩니다.' : '',
    };
  }
  return { value, error: '' };
};

const initialState = { value: '', error: '' };

const UseReducerPage = () => {
  const [nameState, dispatchName] = useReducer<NameReducer>(
    nameReducer,
    initialState
    // 세번째 파라미터는 생략 가능한 initializer
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // state와 마찬가지로 여러번 호출하더라도 한 번만 dispatch됨
    dispatchName({
      type: 'INPUT',
      value,
    });
  };

  return (
    <Container>
      <TextField
        value={nameState.value}
        onChange={handleChange}
        error={!!nameState.error}
        helperText={nameState.error}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export default UseReducerPage;
