import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';

// import '../src/styles/dist/styles.css'

import Particle from './components/Particle'

import Home from './pages/Home'
import Footer from './components/Footer'
import Events from './pages/Events'
import Update from './components/Update'
import Mysticode from './pages/tech/Mysticode';

function App() {

  return (
    <>
      <BrowserRouter>
      <Particle />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path='/event/mindscapes-unfold' element={<Events/>} />
          <Route path='/event/mysticode' element={<Mysticode/>} />

          <Route path='/event/update' element={<Update/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
