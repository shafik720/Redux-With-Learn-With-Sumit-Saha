import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import TodoList from './Components/TodoList/TodoList';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar></Navbar>
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header></Header>
          <TodoList></TodoList>
          <Footer></Footer>
        </div>
      </div>
    </Provider>

  );
}

export default App;
