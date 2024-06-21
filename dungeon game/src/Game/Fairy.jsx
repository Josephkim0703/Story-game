import '../css/game.css';
import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/Backgrounds/background_forest.png';

function Fairy(props){

    const Text = [
        '...',
        'What the hell just happened',
        'Where the hell am I',
        'i gotta stop drinking jeez'
    ];

    useEffect(() => {
        props.setText(Text);
        props.background(background);
    },[props.setText]);
    

    return(
        <div id='game2'>
        <h1>It workds</h1>
        </div>
    )
}

export default Fairy;