import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import './App.css';

import '../src/styles/dist/styles.css'

import Particle from './components/Particle'

import Home from './pages/Home'
import Footer from './components/Footer'
import Events from './pages/Events'
import Update from './components/Update'
import Mysticode from './pages/tech/Mysticode';
import TechTrivia from './pages/tech/TechTrivia'
import GreyScale from './pages/tech/GreyScale'
import CyberSleuth from './pages/tech/CyberSleuth'
import SnapSeek from './pages/nontech/SnapSeek'
import FilmFrency from './pages/nontech/FilmFrency'
import ApexConquest from './pages/nontech/ApexConquest'
import GoogleAnalytics from './utils/GoogleAnalytics'

function App() {

  return (
   
      <BrowserRouter>
      <GoogleAnalytics/>
      <Particle />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='/event/mindscapes-unfold' element={<Events/>} />
          <Route path='/event/mysticode' element={<Mysticode/>} />
          <Route path='/event/tech-trivia' element={<TechTrivia/>} />
          <Route path='/event/greyscale' element={<GreyScale/>} />
          <Route path='/event/cybersleuth' element={<CyberSleuth/>} />


          <Route path='/event/snap-seek' element={<SnapSeek/>} />
          <Route path='/event/film-frency' element={<FilmFrency/>} />
          <Route path='/event/apex-conquest' element={<ApexConquest/>} />


          <Route path='/event/update' element={<Update/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
