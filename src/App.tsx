import { Container, Area, Header } from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './Components/ListItem';
import { InputArea } from './Components/InputArea';
import { useEffect, useState } from 'react';

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    const items = getTasks();
    setList(items);
  }, []);

  const handleAddTask = (taskName: string) => {
    let newList: Item[] = getTasks();
    newList.push({
      id: newList.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
    localStorage.setItem('tasks', JSON.stringify(newList));
  };

  const getTasks = (): Item[] => {
    const tasksJSON = localStorage.getItem('tasks');
    if (tasksJSON === null) return [];
    return JSON.parse(tasksJSON);
  };

  const handleChangeTask = (id: number, done: boolean) => {
    let newList: Item[] = getTasks();
    newList.forEach((item) => {
      if (item.id === id) {
        item.done = done;
      }
    });
    setList(newList);
    localStorage.setItem('tasks', JSON.stringify(newList));
  };

  const handleDeleteTask = (id: number) => {
    let myList: Item[] = getTasks();
    const newList = myList.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem('tasks', JSON.stringify(newList));
  };

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <InputArea onEnter={handleAddTask} />

        {list.map((item: Item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleChangeTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </Area>
    </Container>
  );
};

export default App;
