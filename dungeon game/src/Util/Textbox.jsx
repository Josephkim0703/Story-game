import React, {useState , useEffect} from 'react';
import '../css/game.css';

function Textbox(props){
    const [hide, setHide] = useState(false);
   

    const text = props.text;

    useEffect(() => {
        setWords(text[props.count]);

        if(props.count >= text.length){
            props.hide(false);
        } 
    }, [props.count]);

    const [words, setWords] = useState(text[0]);

    const forward = () => {
        props.setCount((prevCount) => prevCount + 1);
    
        if(props.count >= 1){
            setHide(true);
        }  
        
    };
    
    const back = () => {
        props.setCount((prevCount) => prevCount - 1);
    
        if(props.count === 2){
            setHide(false);
        }
    };
    
    return(
        <>        
            <div id='game_textBox'>
                <p>{words}</p>                
                    <div>
                        {hide &&  <button type='button' onClick={back}><h2>&#129176;</h2></button>}   
                        <button type='button' onClick={forward}><h2>&#129178;</h2></button>                     
                    </div>
            </div>
        </>
    )
}

export default Textbox