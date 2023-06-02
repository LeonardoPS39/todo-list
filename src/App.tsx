import './App.css';
import { Content } from './App.styles';
import Header from './components/Header';
import ItensList from './components/ItensList';
import ToDoInput from './components/ToDoInput';

function App() {
  return (
    <Content>
      <Header />
      <ToDoInput />
      <ItensList />
    </Content>
  );
}

export default App;
