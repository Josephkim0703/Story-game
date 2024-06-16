import '../css/index.css';
import { useState, useEffect } from 'react';
import backgroundImg from '../assets/Game_background_1.png'

function Game1(props) {

props.background(backgroundImg);

useEffect(() => {
    props.setText(['it works', 'kinda'])
},[props.setText])

 
    return(
        <>
        <div id="game1" className="GameScreen">
      
        </div>
        </>
    );
}

export default Game1