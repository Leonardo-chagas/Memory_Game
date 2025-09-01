import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Game from './components/Game';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
