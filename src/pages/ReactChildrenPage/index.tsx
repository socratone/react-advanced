import styled from 'styled-components';
import Options from './Options';
import Option from './Option';

/**
 * React.Children을 이용해서 Option(child)에 prop을 넣지 않아도
 * Options(parent)에서 prop을 넣을 수 있다.
 */

const ReactChildrenPage = () => {
  return (
    <Container>
      <Options>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
        <Option>4</Option>
      </Options>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export default ReactChildrenPage;
