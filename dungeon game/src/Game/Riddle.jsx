import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/Backgrounds/background_town.png';
import background_Char from '../assets/Backgrounds/background_town_1.png';
import alley from '../assets/Backgrounds/background_alley.png';
import alley_blue from '../assets/Backgrounds/background_alley1.png';
import death from '../assets/Characters/Death_Noface.png';
import skull from '../assets/Characters/skull.png';

function Game1(props) {
    const [hover, setHover] = useState(false);

    const [hide, setHide] = useState(false);
    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);
    const [hide3, setHide3] = useState(true);
    const [hide4, setHide4] = useState(false);

    const [display, setDisplay] = useState("none");
    const [opacity, setOpacity] = useState(0);
    const [opacity1, setOpacity1] = useState(0);
    const [opacity2, setOpacity2] = useState(0);
    const [brightness, setBrightness] = useState("");

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
    "I've an elixir that can grant you immense power.",
    "Once consumed it will aid you when all hope seems lost...",
    "To obtain it, you must choose the right chalice by solving my riddle.",
    "But if you fail! תאבד חיים אחד.",
    "Do you accept?",
    "Uhhhh...",
    "This seems really suspicious, but...",
    "Theoretically, it's a 50-50 chance, right?",
    "...",
    "Fuck it we ball"
];

const riddle = [
    "I am the end of all things, the shadow's embrace",
    "A path that all must tread, yet none can retrace.",
    "Some call me silence, where voices all cease",
    "Others see darkness, a void without peace.",
    "But look deeper, you'll see my true guise",
    "I am not ONE or the OTHER, you must open your EYES.",
    "What am I?"
];

const deathText = [
    "Incorrect!",
    "The asnwer is...",
    "DEATH",
];

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

    const counter = (props.count >= 9 && props.count <= 14);
        props.setColor(counter ? "#B22222" : "");
        props.setButtonColor(counter ? "#B22222" : "");
        props.setBgcolor(counter ? "rgba(0, 0, 0, 0.5)" : "");
        props.setBorder(counter ? "2px solid white" : "");

    if(props.count < 7){
        setHide1(false);
    }

    if(props.count === text.length){
        setHide2(true);
       
    }
},[props.count]);

const nextSet = () => {
    setHide1(true);
    setDisplay("none");

    props.hide(true);
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

const [Dtext, setDtext] = useState(deathText[0]);
const [color, setColor] = useState("white");

const incorrect = () => {
    setHide3(false);
    setHide4(true);
    props.hide2(false);

    setTimeout(() =>{ 
        setOpacity2(1);
        setTimeout(() => {
            setOpacity2(0);
            setTimeout(() => {
                setOpacity2(1);
                setDtext(deathText[1])
                setTimeout(() => {
                    setOpacity2(0);
                    setTimeout(() => {
                        setColor("red")
                        setOpacity2(1);
                        setDtext(deathText[2]) 
                        setBrightness("brightness(2)")
                            setTimeout(() => {
                                props.setBlur("blur(8px) brightness(0.5)");
                                setTimeout(() => {
                                    props.setOpacity(1);
                                    props.setVisibility("visible");
                                    setTimeout(() => {
                                    props.finish(false);
                                    },4000);  
                            },2500);  
                        }, 500); 
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 1000);
     },500);

    props.die();
};

return (
    <>
      {hide && (
        <div id="game_arrow" style={{ opacity: opacity, display: display }}>
          <button type="button" onClick={nextSet} onMouseEnter={enter} onMouseLeave={exit}></button>
          <h2 style={style}>&#129178;</h2>
        </div>
      )}
  
      {hide1 && (
        <div id="game1" className="GameScreen">
          <img src={death} alt="image" id="reaper" style={{opacity: opacity1}}/>
            {hide4 && (<h2 style={{opacity: opacity2, color: color }}>{Dtext}</h2>)} 

          {hide2 && (
            <>
              <button type="button" id="button_skull">
                <img src={skull} alt="" id="skull" style={{ filter: brightness }} />
              </button>
  
              {hide3 && (
                <>
                  <div id="setup">

                    <button type="button" onClick={incorrect}>
                      <img src="" alt="Image" />
                        <h1>Tomorrow</h1>
                    </button>

                    <button type="button" onClick={incorrect}>
                      <img src="" alt="Image" />
                        <h1>Night</h1>
                    </button>

                  </div>
  
                  <div id="textBox_riddle">
                    {riddle.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Game1