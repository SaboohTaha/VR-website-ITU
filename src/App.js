import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Navbar />} />
    </Routes>
  );
}

export default App;
