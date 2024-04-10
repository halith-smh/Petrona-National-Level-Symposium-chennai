import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';

// import './styles/styles.css'

import Particle from './components/Particle'

import Home from './pages/Home'

import Events from './pages/Events' /*mindscapes-unfold*/
import Mysticode from './pages/tech/Mysticode';
import TechTrivia from './pages/tech/TechTrivia'
import GreyScale from './pages/tech/GreyScale'
import CyberSleuth from './pages/tech/CyberSleuth'

import SnapSeek from './pages/nontech/SnapSeek'
import FilmFrency from './pages/nontech/FilmFrency'
import ApexConquest from './pages/nontech/ApexConquest'

import Footer from './components/Footer'
// import Update from './components/Update'


function App() {

  return (
   
      <BrowserRouter>
      <Particle />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Technical Events */}
          <Route path='/event/mindscapes-unfold' element={<Events/>} />
          <Route path='/event/mysticode' element={<Mysticode/>} />
          <Route path='/event/tech-trivia' element={<TechTrivia/>} />
          <Route path='/event/greyscale' element={<GreyScale/>} />
          <Route path='/event/cybersleuth' element={<CyberSleuth/>} />


          {/* Non-Technical Events */}
          <Route path='/event/snap-seek' element={<SnapSeek/>} />
          <Route path='/event/film-frency' element={<FilmFrency/>} />
          <Route path='/event/apex-conquest' element={<ApexConquest/>} />

          {/* Test Route */}
          {/* <Route path='/event/update' element={<Update/>} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
