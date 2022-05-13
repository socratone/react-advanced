import styled from '@emotion/styled';

type OptionProps = {
  onClick?: () => void;
  selected?: boolean;
  children: string;
};

const Option = ({ onClick, selected, children }: OptionProps) => {
  return (
    <Container onClick={onClick} selected={selected}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ selected?: boolean }>`
  padding: 10px;
  background: ${(props) => (props.selected ? 'darkblue' : 'dodgerblue')};
  color: white;
  cursor: pointer;
`;

export default Option;
