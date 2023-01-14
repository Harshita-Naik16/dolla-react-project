
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages';
import SigninPage from './Pages/signin';

function App() {

  return (
    <BrowserRouter Basename="/dolla-react-project">
      <Routes>
        <Route exact index path="/dolla-react-project" element={<Home />} />
        <Route path="signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
