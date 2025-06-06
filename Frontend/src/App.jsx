import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserLogout from './pages/UserLogout';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/Captainlogin';
import CaptainSignup from './pages/Captainsignup';
import UserProtectWrapper from './pages/UserProtectedWrapper';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import Driving from './pages/Driving';
import CaptainRiding from './pages/CaptainRiding';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path='/driving' element={<Driving />} />
        <Route path='/captain-driving' element={<CaptainRiding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path='/users/logout' element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App;