import Game1 from './Game/Riddle.jsx';
import Textbox from './Util/Textbox.jsx';
import { useState } from 'react';

function Game(){
    const [text, setText] = useState("");

    return(
        <>
        <Game1 setText={setText}/>
        <Textbox text={text}/>
        </>
    )

}

export default Game