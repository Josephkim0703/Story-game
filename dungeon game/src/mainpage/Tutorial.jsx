import React, {useState , useEffect} from 'react';
import '../css/mainpage.css';

function Tutorial(props){

const [userName, setUsername] = useState("");
const [placeHolder, setplaceHolder] = useState('Username...');

const [visible, setVisibility] = useState(false);
const [hide, setHide] = useState(true);
const [hide1, setHide1] = useState(false);
const [hide2, setHide2] = useState(true);

const [display, setDisplay] = useState("none");
const [opacity, setOpacity] = useState(0);
const [count, setCount] = useState(0);
const [hover, setHover] = useState(false);

const text = [
    'Hello traveler! The name is Thornwood, nice to meet you!',
    'May I ask what your name is?',
    `What a strong name you have ${userName}!`,
    'I hear your seeking to explore the Ruins of Alexandria.',
    'You wil be faced with many obstacles along your journey.',
    'Please take caution as you see the bar at the bottom is your life bar...',
    'And you have but 10 lives.',
    'On your journey look out for CLUES that may help on you on the future!',
    `Goodluck and I hope to one day here the tales of ${userName}!`
];

//whenever the count or username is changed the setword resets
useEffect(() => {
    setWords(text[count]);
}, [count, userName]);

const [words, setWords] = useState(text[0]);

//function when forward button is clicked moves text foward
const forward = () => {
    setCount((prevCount) => prevCount + 1);

    if(count === 0){
        setVisibility(true);
        setHide(false);
    }

    if(count === 3){
        setHide1(true);
    } 

    if(count === 8){
        setHide2(false);

        setDisplay("block");

        setTimeout(() =>{
            setOpacity(1);
        },1000);       
    }
};

//function when backward button is clicked moves text backward
const back = () => {
    setCount((prevCount) => prevCount - 1);

    if(count <= 4){
        setHide1(false);
    }
};

//updates username once its clicked
const update = (e) => {
    setUsername(e.target.value);
};

//submit button for username
const set = () => {
    if(userName === ""){
        setplaceHolder("Try again...");
    } else {
        setCount((prevCount) => prevCount + 1);
        setVisibility(false);
        setHide(true);
    }
};

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
    <div id='playerPrompts'>
        {hide2 &&
            <div id='textBox'>
                <p>{words}</p>  
                    {hide &&
                        <div>
                            {hide1 &&  <button type='button' onClick={back}><h2>&#129176;</h2></button>}   
                            <button type='button' onClick={forward}><h2>&#129178;</h2></button>
                        </div>
                    }
            </div>
            }
            {visible && 
                <div id='inputBox'>
                    <input type="text" placeholder={placeHolder} id='playerInput' onChange={update}/>
                    <button type='button' onClick={set}>&#10003;</button>
                </div>
            }
    
            <div id='arrow' style={{opacity : opacity, display : display}}>
                <button type='button' onClick={props.start} onMouseEnter={enter} onMouseLeave={exit}></button>
                <h2 style={style}>&#129178;</h2>
            </div>
    </div>
);
}

export default Tutorial