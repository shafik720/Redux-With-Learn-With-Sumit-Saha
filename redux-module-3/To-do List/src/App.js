import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar></Navbar>
      <Header></Header>
    </div>
  );
}

export default App;
