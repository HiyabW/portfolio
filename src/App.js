import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Skills from './pages/skills';
import About from './pages/about';
import Navbar from './components/navBar';
import ContactIcons from './components/contactIcons'

function App() {

  const location = useLocation();
  console.log(location)

  return (
    <div className="App">

      <Navbar />

      <ContactIcons />

      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/contact' element={<Contact />} />
          <Route index path='/porfolio' element={<Portfolio />} />
          <Route index path='/resume' element={<Resume />} />
          <Route index path='/skills' element={<Skills />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
