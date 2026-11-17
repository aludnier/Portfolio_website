import './App.css'
import LandingPage from './landingPage/LandingPage'
import { Routes, Route, BrowserRouter } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
