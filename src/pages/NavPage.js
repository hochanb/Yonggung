//for test
import React, { Component } from 'react';
import {Routes , Route, Link} from 'react-router-dom';
import MainPage2 from './MainPage';
import IntroPage from './IntroPage';
import TeamPage from './TeamPage';
import MusicalPage from './MusicalPage';
import NumberPage from './NumberPage';

function NavButton({name='none', link='/'}){
  return(
    <Link 
    to={link}
    className='flex flex-col items-center justify-center w-40 h-12 bg-[#60E4F1] rounded-full m-2'>
      {name}
    </Link>
  )
}

export default function  NavPage () {
  return (
    <>
    <h1>Test Map</h1>
    <div className="flex flex-col items-center">
      <NavButton name='main' link='/main'/>
      <NavButton name='intro' link='/intro'/>
      <NavButton name='team' link='/team'/>
      <NavButton name='musical' link='/musical'/>
      <NavButton name='number' link='/number'/>
      <NavButton name='cast' link='/cast'/>
      <NavButton name='behind' link='/behind'/>
    </div>
    </>
    
  );
};

