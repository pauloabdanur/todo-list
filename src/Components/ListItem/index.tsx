import { Button, ButtonWrapper, Container, Input, Label } from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
};

export const ListItem = ({ item, onChange, onDelete }: Props) => {
  return (
    <Container>
      <Input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      <Label done={item.done}>{item.name}</Label>
      <ButtonWrapper>
        <Button type="button" onClick={(e) => onDelete(item.id)}>
          ❌
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
