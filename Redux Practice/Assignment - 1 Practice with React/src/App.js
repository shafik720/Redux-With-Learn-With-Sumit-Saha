import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import AllMatch from './Components/AllMatch/AllMatch';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="section">
        <Header></Header>
        <AllMatch></AllMatch>
      </div>
    </Provider>

  );
}

export default App;
