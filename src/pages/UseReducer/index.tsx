import { TextField } from '@mui/material';
import React, { useReducer } from 'react';
import styled from 'styled-components';

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

const UseReducer = () => {
  const [nameState, dispatchName] = useReducer<NameReducer>(
    nameReducer,
    initialState
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
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

export default UseReducer;
