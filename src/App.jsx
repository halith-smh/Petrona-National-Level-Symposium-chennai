import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/dist/styles.css'

import Home from './pages/Home'
import MusicPlayer from './components/MusicPlayer'

function App() {

  return (
    <>
      <BrowserRouter>
      {/* <MusicPlayer/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
