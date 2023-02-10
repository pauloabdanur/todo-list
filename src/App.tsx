import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './Components/ListItem';
import { InputArea } from './Components/InputArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Terminar projeto',
      done: false,
    },
    {
      id: 2,
      name: 'Fazer almoço',
      done: true,
    },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleChangeTask = (id: number, done: boolean) => {
    let newList = [...list];
    newList.map((item) => {
      if (item.id === id) {
        item.done = done;
      }
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <InputArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleChangeTask} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
