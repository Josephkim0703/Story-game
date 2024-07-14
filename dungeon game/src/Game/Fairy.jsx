import '../css/game.css';
import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/Backgrounds/background_forest.png';
import background_2 from '../assets/Backgrounds/background_goblin.jpeg';
import background_closeup from '../assets/Backgrounds/background_noGoblin.jpg'
import lena from '../assets/Characters/lena_talk.png';
import Goblin from '../assets/Characters/Goblin_talk.png';

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
        '...',
        'What the fuck! First the Grim-reaper now a horde of goblins...',
        "Wait... is that fairy!?",
        'Kree-hee-hee! Grak nar thalash! Vroth manglar vor ak!',
        "Help! Please, help me! These goblins have trapped me! I don't want to be their dinner!",
        "Grak! Xul nar thokk! Grash var turak vor magra!",
        "Hey, goblins! I know 'grak' means 'shut up.' Yeah, I speak a bit of goblin. But guess what? By the time I'm through with you, you'll be speechless!"
    ];

    const PassText = [
        '...',
        'What happned just now...',
        'My vision got Blurry and then I blacked out.',
        'I swear to god that dude had a skull for a face...',
        'Was he the Grim-Reaper... I gotta stop drinking.',
        "Well, he did say congratulations, so I guess I passed. If I had picked either chalice, I would've failed.",
        "I wonder what would have happened if I chose one of the chalices.",
        "Wait, what's that shimmering in the corner of my vision...?",
        'Auto-Pilot... I guess that was the reward for solving the riddle.',
        'AHHHHH!!!',
        'What was that?!',
        '...',
        'HELP!!!',
        '...',
        'What the fuck! First the Grim-reaper now a horde  of goblins...',
        "Wait... is that fairy!?",
        'Kree-hee-hee! Grak nar thalash! Vroth manglar vor ak!',
        "Help! Please, help me! These goblins have trapped me! I don't want to be their dinner!",
        "Grak! Xul nar thokk! Grash var turak vor magra!",
        "Hey, goblins! I know 'grak' means 'shut up.' Yeah, I speak a bit of goblin. But guess what? By the time I'm through with you, you'll be speechless!"
    ];

    const [hover, setHover] = useState(Array(3).fill(false));
    const [hide, setHide] = useState(Array(5).fill(false));
    const [opacity, setOpacity] = useState(0);
    const [status, setStatus] = useState();
    const [Character, setCharacter] = useState();

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

    useEffect(() => {
      const update = localStorage.getItem('game_2_startGame');
      if(update === 'true'){
        UpdateHide(0, false);
        UpdateHide(1, false);
        UpdateHide(2, true);
        props.background(background_2);
        props.hide(false);
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
            UpdateHide(1, false)
            setTimeout(() =>{
                setOpacity(1);
            },1000); 
        }
      
        if(props.count === 14){
            props.hide1(false);
        }

        if(props.count === 16 || props.count === 18){ 
            UpdateHide(1, true); 
            setCharacter(Goblin);
            const counter = (props.count === 16 || props.count === 18);
            props.setButtonColor(counter ? "red" : "");
            props.setColor(counter ? "RED" : "");
            props.setBgcolor(counter ? "rgba(0, 0, 0, 0.7)" : "");
            props.setBorder(counter ? "2px solid red" : "");
        }

        if(props.count === 17){  
            setCharacter(lena);
            const counter = (props.count === 17);
            props.setButtonColor(counter ? "#00BFFF" : "");
            props.setColor(counter ? "#1E90FF" : "");
            props.setBgcolor(counter ? "rgba(240,248,255, 0.85)" : "");
            props.setBorder(counter ? "2px solid #00BFFF" : "");
            }

        if(props.count === 15 || props.count === 19){
            UpdateHide(1, false);
            props.background(background_2);
        }

        if(props.count >= Text.length){
            props.background(background_2);
            UpdateHide(2, true);
            localStorage.setItem('game_2_startGame', 'true');
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
        props.background(background_2);
        UpdateHide(0, false);
        props.hide(true);
        props.hide1(false);
    }

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [jumping, setJumping] = useState(false);
    const moveStep = 25;
  
    useEffect(() => {

        const movement = (e) => {
            switch (e.key) {
              case 'a':
                setLeft(prevLeft => prevLeft - moveStep);
                break;
              case 'd':
                setLeft(prevLeft => prevLeft + moveStep);
                break;
              case ' ':
                if (!jumping) {
                  setJumping(true);
                  jump();
                }
                break;
              default:
                break;
            }
          };

        function jump() {
            const intervals = setInterval(() => {  
                  setTop(prevTop => prevTop - 5)
          
              },50)
              if (top == 50) {
                  clearInterval(intervals); 
                  setJumping(false);
                }
          }
      document.addEventListener('keydown', movement);
      console.log(top);
      return () => {
        document.removeEventListener('keydown', movement);
      };
      
    }, []);

   
    return(
        <>
        {hide[0] && (
            <div id="game_arrow_1" style={{opacity: opacity}}>
              <button type="button" onClick={nextSet} onMouseEnter={() => enter(1)} onMouseLeave={() => exit(1)}></button>
              <h2 style={style}>&#129178;</h2>
            </div>
          )}
        {hide[1] && (
            <div id='Char_img'>
                <img src={Character} alt="" />
            </div>
        )}
          {hide[2] && (
            <div id='game2'>
                <div id='gameboard'>
                    <div id='game_2_player' style={{left: left, top: top}}></div>
                </div>
            </div>
        )}
        </>
    )
}

export default Fairy;