import React from 'react';
import './main.css';
import Genre from './Genre';
import Kdrama from './Kdrama';
import Anime from './Anime';

function Main() {
  return (
    //holds three othe component childs
    <main>
        <Genre />
        <Anime />
        <Kdrama />
    </main>
  )
}

export default Main