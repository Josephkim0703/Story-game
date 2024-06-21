import '../css/game.css';
import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/Backgrounds/background_forest.png';

function Fairy(props){

    const FailText = [
        '...',
        'My head hurts...',
        'What happened to me? Where am I?',
        'I gotta stop drinking jeez.',
        'Wait I just lost a life, God dammit, I should just moved on what was I thinking.',
        '',
        '',
        '',
        '',
        '*Russel* ',
        'What was that?!',
        '...',
        'HELP!!!',
        '',
    ];

    const PassText = [
        '...',
        'What happned just now...',
        'My vision got Blurry and then I blacked out.',
        'I swear to god that dude had a skull for a face...',
        'Was he the Grim Reaper... I gotta stop drinking.',
        'Well He did say congradulation so I guess I passed. So if I had picked either chalice I would have failed.',
        'I wonder what whould have happened if I chose one the Chalices.',
        'Wait What is that in the corner of my vision...',
        'AutoPiol... I guess that was the reward for solving the riddle.',
        '*Russel*',
        'What was that?!',
        '...',
        'HELP!!!',
        '',
        
    ];

    const [hide, setHide] = useState(Array(5).fill(false));

    function UpdateHide(index){
        const newArray = [...hide];
        newArray[index]
        setHide(newArray);
    }

    const Text = props.status? PassText : FailText;

    useEffect(() => {
        props.setText(Text);
        props.background(background);
    },[props.setText]);
    
    useEffect(() => {
        if(props.count === 12){
            props.hide(false);
            UpdateHide(0);
        }
    },[props.count]);

    return(
        <>
        {hide[0] && (
            <div id="game_arrow" style={{ opacity: opacity, display: display }}>
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