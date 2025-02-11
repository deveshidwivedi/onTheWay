import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/Captainlogin';
import CaptainSignup from './pages/Captainsignup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;