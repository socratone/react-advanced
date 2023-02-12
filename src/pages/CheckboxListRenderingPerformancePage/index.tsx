import styled from '@emotion/styled';
import { useState } from 'react';
import CheckboxListItem from './CheckboxListItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

type Item = {
  id: string;
  label: string;
  checked: boolean;
};

/**
 * react-window를 이용해 화면에 보이는 부분만 렌더링하여 과도한 리렌더링으로 인한 퍼포먼스 문제 해결
 */
const CheckboxListRenderingPerformancePage = () => {
  const [checkboxList, setCheckboxList] = useState<Item[]>(() => {
    const list = [];
    for (let i = 1; i <= 1000; i++) {
      list.push({
        id: String(i),
        label: `${i}번째 아이템`,
        checked: false,
      });
    }
    return list;
  });

  const handleChange = (id: string, checked: boolean) => {
    setCheckboxList((checkboxList) =>
      checkboxList.map((item) => {
        if (item.id === id) return { ...item, checked };
        return { ...item };
      })
    );
  };

  const toggleAll = () => {
    setCheckboxList((checkboxList) => {
      let checked = true;

      if (checkboxList.every((item) => item.checked)) {
        checked = false;
      }

      return checkboxList.map((item) => {
        return {
          ...item,
          checked,
        };
      });
    });
  };

  return (
    <Container>
      <Button onClick={toggleAll}>전체 선택</Button>
      <ScrollableBox>
        <List
          height={400} // list height
          itemCount={checkboxList.length}
          itemSize={40} // item height
          width={400}
          itemData={{ items: checkboxList, onChange: handleChange }} // custom props
        >
          {Row}
        </List>
      </ScrollableBox>
    </Container>
  );
};

// https://react-window.vercel.app/#/examples/list/memoized-list-items
const Row: React.FC<
  ListChildComponentProps<{
    items: Item[];
    onChange: (id: string, checked: boolean) => void;
  }>
> = ({ index, style, data }) => {
  const { items, onChange } = data;
  const item = items[index];

  return (
    <CheckboxListItem
      style={style}
      label={item.label}
      checked={item.checked}
      onChange={(_, checked) => onChange(item.id, checked)}
    />
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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

const ScrollableBox = styled.div`
  border: 1px solid black;
  height: 400px;
  width: 400px;
  overflow-y: auto;
  box-sizing: border-box;
`;

export default CheckboxListRenderingPerformancePage;
