import './css/game.css';
import Game1 from './Game/Riddle.jsx';
import Textbox from './Util/Textbox.jsx';
import { useState } from 'react';

function Game(){
    const [text, setText] = useState(["..."]);
    const [background, setBackground] = useState();

    return(
        <>
        <Game1 setText={setText} background={setBackground}/>
        <Textbox text={text}/>
        <img src={background} alt="Image" id='game_background'/>
        </>
    )

}

export default Game