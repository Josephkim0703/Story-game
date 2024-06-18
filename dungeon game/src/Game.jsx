import './css/game.css';
import Game1 from './Game/Riddle.jsx';
import Textbox from './Util/Textbox.jsx';
import HealthBar from './Util/HealthBar.jsx';
import { useState } from 'react';

function Game(){
    const [text, setText] = useState(["..."]);
    const [count, setCount] = useState(0);
    const [background, setBackground] = useState();

    //hide text box
    const [hide, setHide] = useState(true);
    //hide back button
    const [hide1, setHide1] = useState(false);

    const [border, setBorder] = useState("2px solid black");
    const [color, setColor] = useState("Black");
    const [buttonColor, setButtonColor] = useState("");
    const [bgcolor, setBgcolor] = useState("rgba(240, 248, 255, 0.75)");

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
        <Game1 setText={setText} die={die} background={setBackground} 
               hide={setHide} hide1={setHide1} count={count} 
               setColor={setColor} setBgcolor={setBgcolor} setBorder={setBorder} setButtonColor={setButtonColor}/>
        
        {hide && (<Textbox text={text} count={count} setCount={setCount}
                 hide={setHide} hide1={hide1} setHide1={setHide1}
                 color={color} setColor={setColor} bgColor={bgcolor} 
                 border={border} buttonColor={buttonColor}/>)}

        <HealthBar hearts={hearts}/>

        <img src={background} alt="Image" id='game_background'/>
        </>
    )

}

export default Game