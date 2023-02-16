import React, { useState } from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';
import styled from 'styled-components';

/**
 * react-sortable-hoc을 이용한 draggable list
 */
const DndTrigger: any = SortableHandle(
  ({ children }: { children: React.ReactNode }) => (
    <StyledTrigger>{children}</StyledTrigger>
  )
);

const DndItem: any = SortableElement(
  ({ children }: { children: React.ReactNode }) => (
    <StyledItem>{children}</StyledItem>
  )
);

const DndList: any = SortableContainer(
  ({ children }: { children: React.ReactNode }) => {
    return <StyledList>{children}</StyledList>;
  }
);

const ReactSortableHocPage = (): JSX.Element => {
  const [items, setItems] = useState<string[]>([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ]);

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }): void => {
    setItems((items) => arrayMove(items, oldIndex, newIndex));
  };

  return (
    <Container>
      <DndList
        lockAxis="y"
        lockToContainerEdges={true}
        useDragHandle
        onSortEnd={onSortEnd}
        helperClass="dragging"
      >
        {items.map((value: any, index: number) => (
          <DndItem key={index} index={index}>
            <DndTrigger>↕</DndTrigger>
            <StyledContent>{value}</StyledContent>
          </DndItem>
        ))}
      </DndList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

const StyledItem = styled.div`
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  width: 300px;

  // 드래그할 때 그림자를 나타낸다.
  &.dragging {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const StyledTrigger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: gold;
  font-size: 30px;
  padding: 16px;
`;

const StyledContent = styled.div`
  background-color: skyblue;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

export default ReactSortableHocPage;
