import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/Backgrounds/background_town.png';
import background_Char from '../assets/Backgrounds/background_town_1.png';
import alley from '../assets/Backgrounds/background_alley.png';
import alley_blue from '../assets/Backgrounds/background_alley1.png';
import death from '../assets/Characters/Death_Noface.png';
import skull from '../assets/Characters/skull.png';

function Game1(props) {

    const [hide, setHide] = useState(false);
    const [display, setDisplay] = useState("none");
    const [opacity, setOpacity] = useState(0);
    const [opacity1, setOpacity1] = useState(0);
    const [hover, setHover] = useState(false);
    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);

const text = [
    "...",
    "The time has finally come for me to make a name for myself!",
    "Imagine the treasures and glory awaiting if I uncover the secrets of Alexandria!",
    "And of course I can't forget about...",
    "the Wom...",
    "בצלמות העמוקה, שם פחדים דלקים, אני השטן רואה את האור.",
    "What was that!?",
    "I swear I saw something run here...",
    "Ahhhhh!!!",
    "I hear you're seeking to explore the ruins...",
    "I've a relic that can grant you immense power.",
    "This relic can aid you when all hope seems lost...",
    "If you can solve my riddle, the relic shall be yours.",
    "But if you fail! תאבד חיים אחד."
];

const riddle = [
    "I am the end of all things, the shadow's embrace",
    "A path that all must tread, yet none can retrace.",
    "Some call me silence, where voices all cease",
    "Others see darkness, a void without peace.",
    "But look deeper, you'll see my true guise",
    "I am not ONE or the OTHER, you must open your EYES."
];

useEffect(() => {
    const updatePage = localStorage.getItem('start_game_phase2');
    if (updatePage === "true") {
        setHide1(true);
        props.hide(true);
        setDisplay("none");
        props.background(alley);
        props.setText(text[8]);
    }
  }, []);

useEffect(() => {
    props.setText(text);
    props.background(background);
},[props.setText]);

useEffect(() => {
    if(props.count === 5 || props.count === 6){
        props.background(background_Char); 
    }
   
    if(props.count === 7){
        props.background(background);
        props.hide(false);
        props.hide1(false);
        setHide(true); 
        setDisplay("block");

        setTimeout(() =>{
            setOpacity(1);
        },1000); 
    }

    if(props.count >= 7 && props.count <= 8){
        props.hide1(false);
    }

    if(props.count === 8){
        setOpacity1(1);
        props.background(alley_blue);
    }

    if(props.count >= 9){
        props.setColor("#65000B");
    }else{
        props.setColor("black");
    }

    if(props.count < 7){
        setHide1(false);
    }

    if(props.count === text.length){
        setHide2(true);
       
    }
},[props.count]);

const nextSet = () => {
    setHide1(true);
    props.hide(true);
    setDisplay("none");
    props.background(alley);
    localStorage.setItem('start_game_phase2', true);
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

        {hide1 &&
        <div id="game1" className="GameScreen" style={{opacity: opacity1}}>
            <img src={death} alt="image" id='reaper'/>  
                {hide2 &&
                    <>
                    <button type='button'>Yesterday</button>
                    <button type='button'><img src={skull} alt="" id='skull'/></button>
                    <button type='button'>Night</button>
                    </>
                }
        </div>
        }
        </>
    );
}

export default Game1