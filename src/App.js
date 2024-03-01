import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Team from './components/team';
import AboutUs from './components/aboutus';

function App() {
  return (
    <>
      <Navbar />
      <div className='flex-1 relative'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
