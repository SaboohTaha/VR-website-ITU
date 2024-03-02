import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Team from './components/team';
import AboutUs from './components/aboutus';
import Publications from './components/publications';
import Projects from './components/projects';


function App() {
  return (
    <>
      <div className='flex-1'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
