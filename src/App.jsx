
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages';
import SigninPage from './Pages/signin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
