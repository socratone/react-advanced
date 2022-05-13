import styled from '@emotion/styled';
import React, { Children, useState } from 'react';

type OptionsProps = {
  children: React.ReactElement[];
};

const Options = ({ children }: OptionsProps) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <Container>
      {Children.map(children, (child: React.ReactElement) => {
        const value = child.props.children;
        return (
          <child.type
            onClick={() => setSelectedValue(value)}
            selected={selectedValue === value}
          >
            {value}
          </child.type>
        );
      })}
    </Container>
  );
};

const Container = styled.div``;

export default Options;
