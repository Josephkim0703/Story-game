import './css/game.css';
import Game1 from './Game/Riddle.jsx';
import Textbox from './Util/Textbox.jsx';
import { useState } from 'react';

function Game(){
    const [text, setText] = useState(["..."]);
    const [background, setBackground] = useState();
    const [hide, setHide] = useState(true);
    const [hide1, setHide1] = useState(false);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("Black");

    return(
        <>
        <Game1 setText={setText} background={setBackground} hide={setHide} hide1={setHide1} count={count} setColor={setColor}/>
        {hide &&
        <Textbox text={text} hide={setHide} hide1={hide1} setHide1={setHide1} count={count} setCount={setCount} color={color} setColor={setColor}/>
        }
        <img src={background} alt="Image" id='game_background'/>
        </>
    )

}

export default Game