import React from 'react';
import './App.css';
import IntroPage from 'pages/IntroPage';
import TeamPage from 'pages/TeamPage';
import MusicalPage from 'pages/MusicalPage';
import {MainPage} from 'pages/MainPage';
import NavPage from 'pages/NavPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NumberPage from 'pages/NumberPage';
import CastPage from 'pages/CastPage';
import ActorPage from 'pages/ActorPage';
import { ActorData } from 'MemberInfo';
import BehindPage from 'pages/BehindPage';
import MapPage from 'pages/Map';

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
        <Route path='/cast' element={<CastPage/>}/>
        <Route path='/behind' element={<BehindPage/>}/>
        <Route path='/map' element={<MapPage/>}/>
        {ActorData.map((actor, index)=>
            <Route key={index} path={`/cast/${index}`} element={<ActorPage index={index}/>}/>
        )}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
