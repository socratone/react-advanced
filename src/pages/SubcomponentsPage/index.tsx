import styled from 'styled-components';
import Card from './Card';

/**
 * 서브 컴포넌트를 사용하면 props 수를 줄여 깔끔하게 할 수 있다.
 * 예를 들어 부모(Card)에 onClickHeader prop을 추가할 필요 없이
 * 자식(Card.Header)에 onClick prop을 바로 추가 한다.
 *
 * https://medium.com/@marioserano55/cleaner-codes-react-subcomponents-1c2ebe178566
 */

const SubcomponentsPage = () => {
  return (
    <Container>
      <Card>
        <Card.Header>header</Card.Header>
        <Card.Body>body</Card.Body>
        <Card.Footer>footer</Card.Footer>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export default SubcomponentsPage;
