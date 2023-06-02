import { useState } from 'react';
import { Content } from './styles';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import ToDoInput from './components/ToDoInput';

function App() {
  const [items, setItems] = useState(["test", "Potato"]);

  const onSubmit = (value: string) => {
    setItems(prev => [...prev, value]);
  }

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => index !== i));
  }

  return (
    <Content>
      <Header />
      <ToDoInput onSubmit={onSubmit} />
      <ItemsList 
        items={items} 
        removeItem={removeItem} 
      />
    </Content>
  );
}

export default App;
