import './css/game.css';
import Game1 from './Game/Riddle.jsx';
import Textbox from './Util/Textbox.jsx';
import { useState } from 'react';

function Game(){
    const [text, setText] = useState(["..."]);
    const [background, setBackground] = useState();
    const [hide, setHide] = useState(true);
    const [count, setCount] = useState(0);

    return(
        <>
        <Game1 setText={setText} background={setBackground} hide={setHide} count={count}/>
        {hide &&
        <Textbox text={text} hide={setHide} count={count} setCount={setCount}/>
        }
        <img src={background} alt="Image" id='game_background'/>
        </>
    )

}

export default Game