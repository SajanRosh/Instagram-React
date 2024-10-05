import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import Error from './pages/Error';
import { Routes, Route } from 'react-router-dom';
import Requests from './pages/Requests';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Requests/>}></Route>
        <Route path='/requests' element={<Requests/>}/>
        <Route path='/about' element={'https://about.instagram.com/'}/>
        <Route path='/user/:username' element={<UserDetails/>}></Route>
        <Route path='/post/:id' element={<Posts/>}></Route>
        <Route path='/error' element={<Error></Error>}></Route>
        <Route path='/*' element={<Error></Error>}/>
      </Routes>
      
    </div>
  )
}

export default App
