import './css/game.css';
import Game1 from './Game/Riddle.jsx';
import Textbox from './Util/Textbox.jsx';
import HealthBar from './Util/HealthBar.jsx';
import { useState } from 'react';

function Game(props){
    const [text, setText] = useState(["..."]);
    const [count, setCount] = useState(0);
    const [background, setBackground] = useState();

    //hide text box
    const [hide, setHide] = useState(true);
    //hide back button
    const [hide1, setHide1] = useState(false);
    //hide health bar
    const [hide2, setHide2] = useState(true);
    const [hide_game_1, sethide_game_1] = useState(true);

    const [border, setBorder] = useState("");
    const [color, setColor] = useState("");
    const [buttonColor, setButtonColor] = useState("");
    const [bgcolor, setBgcolor] = useState("");
    const [blur, setBlur] = useState(""); 

    const [hearts, setHearts] = useState(Array(10).fill(true));

    const die = () => {

        //this find the last div that is set to true
        const prevHeart = hearts.lastIndexOf(true);
    
        //if the last div is not false
        if (prevHeart !== false) {
            //create a new array and use spread operator to fill with the heart array
            const newArray = [...hearts];
            //find the previous div in the new array and set it to false then push to setHearts()
            newArray[prevHeart] = false;
            setHearts(newArray);
        }     
    }

    return(
        <>
        {hide_game_1 &&
        (<Game1 setText={setText} die={die} background={setBackground} 
               hide={setHide} hide1={setHide1} hide2={setHide2} count={count} 
               setColor={setColor} setBgcolor={setBgcolor} setBorder={setBorder}
               setButtonColor={setButtonColor} setBlur={setBlur}
               setOpacity={props.opacity} setVisibility={props.visibility} finish={sethide_game_1}/>)}
        
        
        {hide && (<Textbox text={text} count={count} setCount={setCount}
                 hide={setHide} hide1={hide1} setHide1={setHide1}
                 color={color} setColor={setColor} bgColor={bgcolor} 
                 border={border} buttonColor={buttonColor}/>)}

        {hide2 && (<HealthBar hearts={hearts}/>)}

        <img src={background} alt="Image" id='game_background' style={{filter: blur}}/>
      
        </>
    )

}

export default Game