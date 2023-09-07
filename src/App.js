import React from 'react';
import './App.css';
import IntroPage from 'pages/IntroPage';
import TeamPage from 'pages/TeamPage';
import MusicalPage from 'pages/MusicalPage';
import MainPage from 'pages/MainPage';
import NavPage from 'pages/NavPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NumberPage from 'pages/NumberPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <IntroPage /> */}
      {/* <TeamPage /> */}
      {/* <MusicalPage/> */}
      {/* <NavPage/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavPage/>}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/intro" element={<IntroPage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/musical' element={<MusicalPage/>}/>
        <Route path='/number' element={<NumberPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
