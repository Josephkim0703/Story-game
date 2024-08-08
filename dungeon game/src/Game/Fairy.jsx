import '../css/game.css';
import '../css/index.css';
import { useState, useEffect } from 'react';
import background from '../assets/Backgrounds/background_forest.png';
import background_2 from '../assets/Backgrounds/background_goblin.jpeg';
import background_3 from '../assets/Backgrounds/background_forest_3.png';
import background_4 from '../assets/Backgrounds/background_tree_1.png';
import lena_head from '../assets/Util/Fairy_head.png';
import Goblin_head from '../assets/Util/Goblin_head.png';
import bomb from '../assets/Util/bomb.png';
import scroll from '../assets/Util/scroll.png';
import lena from '../assets/Characters/lena_talk.png';
import Goblin from '../assets/Characters/Goblin_talk.png';
import button from '../assets/Util/button.png';
import lena_full from '../assets/Characters/lena.png';

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
        "If you save me I will grant you a wish! Just keep me safe until I can charge up my attack!"
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
        "If you save me I will grant you a wish! Just keep me safe until I can charge up my attack!"
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
    //bug default is fail text for some reason
    
    useEffect(() => {
        const status = localStorage.getItem('status');          
            if(status === 'false'){
                setStatus(false);
            }
            else{
                setStatus(true);
            } 
    },[]);

    const Text = status? PassText : FailText;

    useEffect(() => {
      const update = localStorage.getItem('game_2_startGame');
      if(update === 'true'){
        UpdateHide(0, false);
        UpdateHide(1, false);
        UpdateHide(2, true);
        UpdateHide(3, true);
        props.background(background_4);
        props.hide(false);
      }

    },[]);

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

        if(props.count === 17 || props.count === 19){  
            setCharacter(lena);
            const counter = (props.count === 17 || props.count === 19);
            props.setButtonColor(counter ? "#00BFFF" : "");
            props.setColor(counter ? "#1E90FF" : "");
            props.setBgcolor(counter ? "rgba(240,248,255, 0.85)" : "");
            props.setBorder(counter ? "2px solid #00BFFF" : "");
            }

        if(props.count === 15){
            UpdateHide(1, false);
            props.background(background_2);
        }

        if(props.count >= Text.length){
            props.setCount(0);
            props.background(background_4);
            UpdateHide(1, false);
            UpdateHide(2, true);
            UpdateHide(3, true);
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
  
    const [seconds, setSeconds] = useState(30);
    const [startTimer, setStartTimer] = useState(false);
 
    useEffect(() => {
      if (startTimer === true) {
        const interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds - 1);

          if(seconds <= 0){
            setSeconds(0);
            setStartTimer(false);
            clearInterval(interval);
          }
            
          }, 1000);

        return () => clearInterval(interval);
      }
    }, [startTimer, seconds]);   

    function start(){
        UpdateHide(4, true);
        UpdateHide(3, false);
        setStartTimer(true);
        props.background(background_4);
    }
      const [count, setCount] = useState(0);
      const [image, setImage] = useState();
      const [ran, setRan] = useState();
      const [top, setTop] = useState();
      const [left, setLeft] = useState();

    useEffect(() => {
      const x = window.innerWidth - 200;
      const y = window.innerHeight - 200;
       
      const interval = setInterval(() => {
        setTop(() => {
          return Math.floor(Math.random() * y)+ 100;
        });  
        setLeft(() => {
          return Math.floor(Math.random() * x )+ 100;
        });

        if(seconds <= 0){
          clearInterval(interval);
        }

        setRan(() => {return Math.floor(Math.random() * 8) + 1});

          switch(ran){
            case 1:
              setImage(bomb);
              break;
            case 2:
              setImage(Goblin_head);
              break;
            case 3:
              setImage(Goblin_head);
              break;
            case 4:
              setImage(Goblin_head);
              break;
            case 5:
              setImage(bomb);
              break;
            case 6:
              setImage(lena_head);
              break;
            case 7:
              setImage(Goblin_head);
              break;
            case 8:
              setImage(Goblin_head);
            break;
          }
        
      }, 510)

      return () => clearInterval(interval);
    },[seconds]);
    
    function test(){   
          if(image == bomb){
            props.die();
          }
          if(image == Goblin_head){
           setCount(prevCount => prevCount + 1);
          }
          if(image == lena_head){
            props.die();
          }  
    }

    useEffect(() => {
          if(seconds <= 0){
          UpdateHide(4, false);
          UpdateHide(3, false);
          CurrentStatus()
          }
    },[seconds]);
      
    const name = localStorage.getItem("name");

    const win = [
        "...",
        "Thank you so much for saving me! I hope you didn't take too much damage.",
        "I'm alright! What a day—first, I run into the Grim Reaper, and then a horde of goblins!",
        "And I haven't even started looking for Alexandria. Honestly, I don’t even know where I am.",
        "Wait, did you say Alexandria? I was heading there too, but that's when the goblins captured me.",
        "I’ve heard rumors that Alexandria was sealed away and disguised as a dungeon, so no one could find it.",
        "How were you planning to find Alexandria, if you don’t mind me asking?",
        "...",
        "So, no plan at all, huh?",
        "...",
        "Heh, you're quite the character! How about we team up? I’ll handle the navigating, and you can be the muscle.",
        `That sounds like a deal, partner. HaHaHa! My name is ${name}. What's yours?`,
        "My name is Lena!"
    ];

    const lose = [
        "...",
        "We barely escaped! Oh my goodness you took so much damage!",
        "Don't worry about it! I knew this Journey would be a tough one. But this is a bummer...",
        "And I haven't even started looking for Alexandria. Honestly, I don’t even know where I am.",
        "Wait, did you say Alexandria? I was heading there too, but that's when the goblins captured me.",
        "I’ve heard rumors that Alexandria was sealed away and disguised as a dungeon, so no one could find it.",
        "How were you planning to find Alexandria, if you don’t mind me asking?",
        "...",
        "So, no plan at all, huh?",
        "...",
        "Heh, you're quite the character! How about we team up? I’ll handle the navigating, and you can be the muscle.",
        `That sounds like a deal, partner. HaHaHa! My name is ${name}. What's yours?`,
        "My name is Lena!"
    ];

    const [endText, setEndText] = useState();
    const [endColor, setEndColor] = useState();
    const [endShadow, setEndShadow] = useState();  
    const [endfade, setEndFade] = useState("0");      

    function CurrentStatus(){
        localStorage.setItem("Goblin_game", true);
        UpdateHide(5, true);
        setTimeout(() => {setEndFade("1")})
      
          if(count >= 15){    
            setEndText("Victory!")
            setEndColor("white");
            setEndShadow("0px 0px 10px white");
            props.setText(win);
           
          }else{ 
            setEndText("Escaped!")
            setEndColor("red");
            setEndShadow("0px 0px 10px red");
            props.setText(lose);
            const newCount = 15 - count;

            for(let i = 0; i < newCount; i++){
              props.die();
            }  
          }

          setTimeout(() => {
            setEndFade("0");
            setTimeout(() => {
              props.hide(true);
              UpdateHide(2, false);
              UpdateHide(6, true);
              props.background(background_3);
            },1000);
          },2500);
    }

    useEffect(() => {
        if(seconds <= 0){

        if(props.count === 1 || (props.count >= 4 && props.count <= 6) || props.count === 8 || props.count === 10 ||  props.count === 12){
          const counter = (props.count === 1 || (props.count >= 4 && props.count <= 6) || props.count === 8 || props.count === 10 ||  props.count === 12);
            props.setButtonColor(counter ? "#00BFFF" : "");
            props.setColor(counter ? "#1E90FF" : "");
            props.setBgcolor(counter ? "rgba(240,248,255, 0.85)" : "");
            props.setBorder(counter ? "2px solid #00BFFF" : "");
        }else{
          props.setButtonColor();
          props.setColor();
          props.setBgcolor();
          props.setBorder();
        }

        if(props.count >= 13){
          UpdateHide(6, false);
          UpdateHide(0, false);
        }
       
      }
    },[props.count,seconds]);

    useEffect(() => {
      const update1 = localStorage.getItem("Goblin_game")
      if(update1 === 'true'){
        UpdateHide(0, false);
        UpdateHide(1, false);
        UpdateHide(2, false);
        UpdateHide(6, true);
        setSeconds(0);
        props.background(background_3);
        props.hide(true);
      }
    },[]);

//hit effects
//if we lose all heatlh restart
//add background for zoom of goblin and fairy talking  
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

            {hide[3] && (
                <div id='game_rules'>      
                    <h1>How To Play</h1>
                    <p>Survive by <span style={{ color: "green"}}>Clicking</span> 15 Goblins. <br/><br/> Stay vigilant and avoid hitting the <span style={{ color: "green"}}>bombs</span> or you'll lose a life. <br/><br/>
                      Be warned if you attack the <span style={{ color: "green"}}>fairy</span> you will also lose a life.<br/><br/>
                      Good luck and stay nimble to survive the goblin onslaught!</p>
                    <button type='start_game_2' onClick={start}><img src={button} alt="" /><h1>Start</h1></button>
                    <img src={scroll} alt="" />
                </div>
            )}

            <div id='timer'><h1>Timer: {seconds}s</h1></div>
            <div id='GoblinCount'><h1>Kills: {count}</h1></div>

            {hide[4] && (
                <div id='gameboard'>
                
                    <button id='game_2_icon' style={{top: top, left: left}} onClick={test}>
                    <img src={image} alt="" />
                    </button>
                 
                </div>
              )}

            {hide[5] && (
              <div id='game_2_status' style={{opacity: endfade}}>
                    <h1 style={{color: endColor, textShadow: endShadow}}>{endText}</h1>            
              </div>
            )};
            </div>
        )}

          {hide[6] && (
            <div id='game_2_Char'>
                <img src={lena_full} alt="" />
            </div>
          )}
 
        </>
    )
}

export default Fairy;