import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container>
      <input type="checkbox" />
      <label htmlFor={item.name}>{item.name}</label>
    </C.Container>
  )
}
