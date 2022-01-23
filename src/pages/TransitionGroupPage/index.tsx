import { useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const TransitionGroupPage = () => {
  const id = useRef(5);
  const [items, setItems] = useState([1, 2, 3, 4]);

  const handleAdd = () => {
    setItems([...items, id.current]);
    id.current += 1;
  };

  const handleRemove = (id: number) => {
    const filteredItems = items.filter((item) => item !== id);
    setItems(filteredItems);
  };

  return (
    <Container>
      <Button onClick={handleAdd}>생성</Button>
      <TransitionGroup component="ul">
        {items.map((item) => (
          <CSSTransition key={item} timeout={500} classNames="item">
            <Item onClick={() => handleRemove(item)}>{item}</Item>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ul {
    margin: 0;
    padding: 0;

    > * {
      margin-bottom: 10px;
    }

    > *:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Button = styled.button`
  color: white;
  background: dodgerblue;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;

const Item = styled.li`
  cursor: pointer;
  color: white;
  background: tomato;
  width: 200px;
  list-style: none;
  padding: 10px;
  border-radius: 10px;

  &.item-enter {
    opacity: 0;
  }

  &.item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  &.item-exit {
    opacity: 1;
  }

  &.item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
`;

export default TransitionGroupPage;
