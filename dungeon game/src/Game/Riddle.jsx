import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/background_town.png';
import background_Char from '../assets/background_town_1.png';
import alley from '../assets/background_alley.jpeg';

function Game1(props) {

    const [hide, setHide] = useState(false);
    const [display, setDisplay] = useState("none");
    const [opacity, setOpacity] = useState(0);
    const [hover, setHover] = useState(false);


const text = [
    "...",
    "The time has finally come for me to make a name for myself!",
    "Imagine the treasures and glory awaiting if I uncover the secrets of Alexandria!",
    "And of course I can't forget about...",
    "the Wom...",
    "בצלמות העמוקה, שם פחדים דלקים, אני השטן רואה את האור.",
    "What was that!?",
    "I swear I saw something run here...",
    "Ahhhhh!!!"
];

useEffect(() => {
    props.setText(text);
    props.background(background);
   
},[props.setText]);

useEffect(() => {
    if(props.count === 5 || props.count === 6){
        props.background(background_Char); 
    }else{
        props.background(background); 
    }
    if(props.count === 7){
        props.hide(false);

        setHide(true); 
        setDisplay("block");

        setTimeout(() =>{
            setOpacity(1);
        },1000); 
    }
},[props.count]);

const nextSet = () => {
    props.hide(true);
    setDisplay("none");
    props.background(alley);
}

function exit() {
    setHover(false);
}

function enter() {
    setHover(true);
}

const style = {
    color: hover? 'orange' : '',
};

 
    return(
        <>
       {hide && 
        <div id='game_arrow' style={{opacity : opacity, display : display}}>
        <button type='button' onClick={nextSet} onMouseEnter={enter} onMouseLeave={exit}></button>
        <h2 style={style}>&#129178;</h2>
        </div>   
       }
        <div id="game1" className="GameScreen">
            
        </div>
        </>
    );
}

export default Game1