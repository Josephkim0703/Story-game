import '../css/game.css';
import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/Backgrounds/background_forest.png';

function Fairy(props){

    const FailText = [
        '...',
        'My head hurts...',
        'What happened to me? Where am I?',
        'I swear to god that dude had a skull for a face... I gotta stop drinking jeez.',
        "Wait, I just lost a life. By the gods, what was I thinking? Should've just walked away.",
        "Man this sucks!! Calm down. Breath. Let's figure out where we are first.",
        "Alright... I see trees and flowers and...",
        '...',
        "More trees... Great. Well, it could've been worse.",
        'AHHHHH!!!',
        'What was that?!',
        '...',
        'HELP!!!',
        '',
        '',
        '',
        '',
    ];

    const PassText = [
        '...',
        'What happned just now...',
        'My vision got Blurry and then I blacked out.',
        'I swear to god that dude had a skull for a face...',
        'Was he the Grim Reaper... I gotta stop drinking.',
        "Well, he did say congratulations, so I guess I passed. If I had picked either chalice, I would've failed.",
        "I wonder what would have happened if I chose one of the chalices.",
        "Wait, what's that shimmering in the corner of my vision...?",
        'Auto-Pilot... I guess that was the reward for solving the riddle.',
        'AHHHHH!!!',
        'What was that?!',
        '...',
        'HELP!!!',
        '',
        '',
        '',
        '',
    ];

    const [hover, setHover] = useState(Array(3).fill(false));
    const [hide, setHide] = useState(Array(5).fill(false));
    const [opacity, setOpacity] = useState(0);
    const [status, setStatus] = useState();

    //takes previous state and then adds on new state and updates
    function UpdateHide(index, value){
        setHide(prevHide => {
            const newArray = [...prevHide];
            newArray[index] = value;
            return newArray;
        });
    }
    
    useEffect(() => {
        const status = localStorage.getItem('status');          
            if(status === 'false'){
                setStatus(false);
            }else if(status === 'true'){
                setStatus(true);
            } 
    },[]);
 
    const Text = status? PassText : FailText;

    useEffect(() => {
        props.setText(Text);
        props.background(background);
    },[props.setText]);
    
    useEffect(() => {
      
        const counter = (props.count === 9 || props.count === 12);
        props.setButtonColor(counter ? "red" : "");
        props.setColor(counter ? "RED" : "");
        props.setBgcolor(counter ? "rgba(0, 0, 0, 0.7)" : "");
        props.setBorder(counter ? "2px solid red" : "");
        
        if(props.count === 13){
            props.hide(false);
            UpdateHide(0, true);

            setTimeout(() =>{
                setOpacity(1);
            },1000); 
        }

        if(props.count === 14){
            props.hide1(false);
        }
    },[props.count]);

    function exit(index) {
        const newHover = [...hover];
        newHover[index] = false;
        setHover(newHover);
    }
      
    function enter(index) {
        const newHover = [...hover];
        newHover[index] = true;
        setHover(newHover);
    }
      
    const style = {
          color: hover[1]? 'orange' : '',
    };

    function nextSet(){
        props.background();
        UpdateHide(0, false);
        UpdateHide(1, true);
        props.hide(true);
        props.hide1(false);
    }

    return(
        <>
        {hide[0] && (
            <div id="game_arrow_1" style={{opacity: opacity}}>
              <button type="button" onClick={nextSet} onMouseEnter={() => enter(1)} onMouseLeave={() => exit(1)}></button>
              <h2 style={style}>&#129178;</h2>
            </div>
          )}
        {hide[1] && (
            <div id='game2'>
                <h1>Testing</h1>
            </div>
        )}
        </>
    )
}

export default Fairy;