import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>
      <Header></Header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
