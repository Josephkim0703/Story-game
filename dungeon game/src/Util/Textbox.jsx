import React, {useState , useEffect} from 'react';
import '../css/game.css';

function Textbox(props){
  
    const text = props.text;

    useEffect(() => {
        setWords(text[props.count]);

        if(props.count >= text.length){
            props.hide(false);
            props.setColor("black");
        } 
    }, [props.count]);

    const [words, setWords] = useState(text[0]);

    const forward = () => {
        props.setCount((prevCount) => prevCount + 1);
    
        if(props.count >= 1){
            props.setHide1(true);
        }  
        
    };
    
    const back = () => {
        props.setCount((prevCount) => prevCount - 1);
    
        if(props.count === 2){
            props.setHide1(false);
        }
    };
    
    return(
        <>        
            <div id='game_textBox'>
                <p style={{color: props.color}}>{words}</p>                
                    <div>
                        {props.hide1 &&  <button type='button' onClick={back}><h2>&#129176;</h2></button>}   
                        <button type='button' onClick={forward}><h2>&#129178;</h2></button>                     
                    </div>
            </div>
        </>
    )
}

export default Textbox