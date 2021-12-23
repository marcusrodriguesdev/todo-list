import { useState } from 'react';
import * as C from './App.styles';
import { ListItem } from './components/ListItem';
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Viajar com familia', done: false},
    { id: 2, name: 'Estudar Typescript', done: false}
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        { list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
          />
        )) }
      </C.Area>
    </C.Container>
  );
}

export default App;