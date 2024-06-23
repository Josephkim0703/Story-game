import './css/game.css';
import Game1 from './Game/Riddle.jsx';
import Game2 from './Game/Fairy.jsx';
import Textbox from './Util/Textbox.jsx';
import HealthBar from './Util/HealthBar.jsx';
import { useState, useEffect } from 'react';

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
    const [hide_game, setHideGame] = useState(Array(2).fill(false));

    const [border, setBorder] = useState("");
    const [color, setColor] = useState("");
    const [buttonColor, setButtonColor] = useState("");
    const [bgcolor, setBgcolor] = useState("");
    const [blur, setBlur] = useState(""); 

    /*grabs the heart status from local storage if it exists then sets heart
      to savedHearts but if it isnt then it sets it to default array.
      then returns the the heart status from arrow function
    */
    const [hearts, setHearts] = useState(() => {
        const heartStatus = localStorage.getItem("heartStatus");
        return heartStatus? JSON.parse(heartStatus) : Array(10).fill(true);
    });

    function die(){
        const prevHeart = hearts.lastIndexOf(true);
        if (prevHeart !== false) {
            const newArray = [...hearts];
            newArray[prevHeart] = false;
            setHearts(newArray);
        }     
    }

    useEffect(() => {
        localStorage.setItem("heartStatus", JSON.stringify(hearts));
    }, [hearts]);

    function updateHide(index){
        const newHide = [...hide_game];
        newHide[index] = true;
        setHideGame(newHide);
    }

    useEffect(() => {
    const updatePage2 = localStorage.getItem("game_1_fin");
    if (updatePage2 === "true") {
        sethide_game_1(false);
    }
    }, []);

    if(hide_game_1 === false){
    setTimeout(() => {

        updateHide(0);
    },);

    setTimeout(() => {  
        props.visibility("");
    },4000)
    }

    return(
        <>
        {hide_game_1 &&
        (<Game1 setText={setText} die={die} background={setBackground}
               hide={setHide} hide1={setHide1} hide2={setHide2} count={count} setCount={setCount}
               setColor={setColor} setBgcolor={setBgcolor} setBorder={setBorder}
               setButtonColor={setButtonColor} setBlur={setBlur}
               setOpacity={props.opacity} setVisibility={props.visibility} finish={sethide_game_1}/>)}

        {hide_game[0] && 
        (<Game2 setText={setText} die={die} background={setBackground} 
                count={count} hide={setHide} setButtonColor={setButtonColor}
                setColor={setColor} setBgcolor={setBgcolor} setBorder={setBorder}/>)}
        
        
        {hide && <Textbox text={text} count={count} setCount={setCount}
                 hide={setHide} hide1={hide1} setHide1={setHide1}
                 color={color} setColor={setColor} bgColor={bgcolor} 
                 border={border} buttonColor={buttonColor}/>}

        {hide2 && (<HealthBar hearts={hearts}/>)}

        <img src={background} alt="Image" id='game_background' style={{filter: blur}}/>
      
        </>
    )

}

export default Game