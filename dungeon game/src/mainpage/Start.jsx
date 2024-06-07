import '../css/mainpage.css';
import logo from '../assets/Logo.png';
import button from '../assets/button.png';
import scroll from '../assets/scroll.png';
import {useState} from 'react';

function Door(){

    const [hover, setHover] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [show, setShow] = useState("0");

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
    };
    const mouseon = () => {
        setHover(true);
    }

    const mouseoff = () => {
        setHover(false);
    }

    
    const style = {
        backgroundColor: hover? "rgb(158, 0, 0)" : "black"
    }

    return(
        <main style={{opacity: opacity}}>
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
                <p>How to play</p>
            </div>
            
        </main>
    )
}

export default Door;