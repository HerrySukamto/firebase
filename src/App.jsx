//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import gambar1 from './assets/gambar1.svg'

import './App.css'
//import database from './firebase'
//import { useEffect, useState} from 'react';
//import { database, ref, onValue } from './firebase'
//import {database} from './firebase'
//import {ref} from './firebase'
//import React from 'react'
//import DynamicSVG from './components/DynamicSVG'
//import retank from './assets/tank.svg'
//import StudioData from './StudioData';
import Tank1 from './components/tank.jsx';
import Wadah from './components/wadah.jsx'


function App1() {
  return (
    <div align="center">
      <h1>Non</h1>
      <img src={gambar1}  className='picturetank'  alt="Tank Logo" />  
    </div>
  );
}


function App2() {
  return (
    <div align="center">
      <h1>Water Tank Volume</h1>
      <Tank1 /> 
    </div>
  );
}

function App3() {
  return (
    <div align="center">
      <h1>Water Tank Volume</h1>
      <Tank1 /> 
    </div>
  );
}

function App4() {
  return (
    <div align="center">
      <h1>Tank 500 m3</h1>
      <Wadah /> 
    </div>
  );
}



export  {App1, App2, App3, App4};
