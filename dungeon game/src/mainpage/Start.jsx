import '../css/mainpage.css';
import logo from '../assets/Util/Logo.png';
import button from '../assets/Util/button.png';
import scroll from '../assets/Util/scroll.png';
import {useState} from 'react';

function Start(props){

    const [hover, setHover] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [show, setShow] = useState("0");
    const [display, setDisplay] = useState("");

        document.addEventListener('click', (e) =>{
            if (!e.target.closest('#rules')) {
                setShow("0");
            }
        });
    
    const rules = () => {
     setShow("1") 
    };

    const start = () => {
      setOpacity(0);  
      props.zoom();
      setTimeout(() => {
        setDisplay("none");
        props.next();
      }, 3500);
    };
    const mouseon = () => {
        setHover(true);
        
    }

    const mouseoff = () => {
        setHover(false);
    }

    
    const style = {
        backgroundColor: hover? "rgb(158, 0, 0)" : "black",
    }

    return(
        <main style={{opacity: opacity, display: display}}>
            <h1>Ruins of Alexandria</h1>        
                <img src={logo} alt="image" /> 
                    <button type='button' 
                        onClick={start} 
                        onMouseEnter={mouseon} 
                        onMouseLeave={mouseoff} 
                        id='start'>
                            <img src={button} alt="Start"/>
                                <h1>Start</h1>
                    </button>

                    <button type='button' 
                        id='rules' 
                        onClick={rules}>     
                            <img src={button} alt="Rules"/>
                                <h1>Rules</h1>
                    </button>
            <div style={style}></div>
            
            <div style={{opacity: show}} id='scroll'>
                <img src={scroll} alt="scroll" id='scroll'/>
                    <h1>How to Play</h1>
                <p>  Welcome to the Ruins of Alexandria <br />
                    An ancient artifact of immense power lies hidden, awaiting a soul to unveil its secrets.
                    Traverse the lands and undertake the many quests that test your courage and wit.
                    But beware, for each failed challenge costs a <span style={{color:"red"}}>LIFE</span>, and you have but <span style={{color:"red"}}>TEN</span>.
                    Keep your eyes sharp for <span style={{color:"red"}}>CLUES</span> within the mini games, for they may guide you in <span style={{color:"red"}}>future quests</span>.
                    May fortune favor you and your heart remain steadfast in this land of ancient wonder.
                </p>
            </div>
            
        </main>
    )
}

export default Start;