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
        "Wait I just lost a life, God dammit, I should've just moved on what was I thinking.",
        'Man this sucks!! Calm down, breath, lets just figure out where we are first.',
        'Ok... I see trees and flowers and...',
        '...',
        "More trees... God dammit! Well it could've been worse.",
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
        'Well He did say congradulation so I guess I passed. So if I had picked either chalice I would have failed.',
        'I wonder what would have happened if I chose one the Chalices.',
        'Wait What is that in the corner of my vision...',
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

    function UpdateHide(index){
        const newArray = [...hide];
        newArray[index] = true;
        setHide(newArray);
    }

    const Text = props.status? PassText : FailText;

    useEffect(() => {
        props.setText(Text);
        props.background(background);
    },[props.setText]);
    
    useEffect(() => {
        console.log(props.count);

        const counter = (props.count === 9 || props.count === 12);
        props.setButtonColor(counter ? "red" : "");
        props.setColor(counter ? "RED" : "");
        props.setBgcolor(counter ? "rgba(0, 0, 0, 0.7)" : "");
        props.setBorder(counter ? "2px solid red" : "");
        
        if(props.count === 13){
            props.hide(false);
            UpdateHide(0);

            setTimeout(() =>{
                setOpacity(1);
            },1000); 
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

    }

    return(
        <>
        {hide[0] && (
            <div id="game_arrow_1" style={{ opacity: opacity}}>
              <button type="button" onClick={nextSet} onMouseEnter={() => enter(1)} onMouseLeave={() => exit(1)}></button>
              <h2 style={style}>&#129178;</h2>
            </div>
          )}

        <div id='game2'>
   
        </div>
        </>
    )
}

export default Fairy;