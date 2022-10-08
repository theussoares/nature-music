
import './App.css'
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './Register/components/indexRegister';
import LoginPage from './Login/components/indexLogin';
import LandPage from './LandPage/components/indexLandPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <LandPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="register" element={ <RegisterPage /> } />
    </Routes>
  )
}

export default App
