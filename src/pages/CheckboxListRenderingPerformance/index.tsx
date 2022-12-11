import styled from '@emotion/styled';
import { useState } from 'react';
import CheckboxListItem from './CheckboxListItem';

const CheckboxListRenderingPerformancePage = () => {
  const [checkboxList, setCheckboxList] = useState(() => {
    const list = [];
    for (let i = 1; i <= 1000; i++) {
      list.push({
        id: String(i),
        checked: false,
        label: `${i}번째 아이템`,
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
        {checkboxList.map((item) => (
          <CheckboxListItem
            key={item.id}
            label={item.label}
            checked={item.checked}
            onChange={(_, checked) => handleChange(item.id, checked)}
          />
        ))}
      </ScrollableBox>
    </Container>
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
  height: 500px;
  width: 500px;
  overflow-y: auto;
`;

export default CheckboxListRenderingPerformancePage;
