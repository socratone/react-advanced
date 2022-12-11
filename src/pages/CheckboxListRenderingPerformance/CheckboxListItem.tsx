import styled from '@emotion/styled';
import { Checkbox, Typography } from '@mui/material';

interface CheckboxListItemProps {
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  label: string;
}

const CheckboxListItem: React.FC<CheckboxListItemProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <Container>
      <Checkbox checked={checked} onChange={onChange} />
      <Typography>{label}</Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default CheckboxListItem;
