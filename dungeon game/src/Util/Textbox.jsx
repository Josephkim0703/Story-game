import React, {useState , useEffect} from 'react';

function Textbox(props){

    const [hide1, setHide1] = useState(false);
    const [hide, setHide] = useState(true);
    const [count, setCount] = useState(0);

    const text = props.text;

    useEffect(() => {
        console.log(count);
        setWords(text[count]);
    }, [count]);

    const [words, setWords] = useState(text[0]);

    const forward = () => {
        setCount((prevCount) => prevCount + 1);
    
        if(count >= 0){
            setHide1(true);
        } 
    
     
    };
    
    const back = () => {
        setCount((prevCount) => prevCount - 1);
    
        if(count === 1){
            setHide1(false);
        }
    };
    

    return(
        <>
            {hide &&
                <div id='textBox'>
                    <p>{words}</p>                
                        <div>
                            {hide1 &&  <button type='button' onClick={back}><h2>&#129176;</h2></button>}   
                            <button type='button' onClick={forward}><h2>&#129178;</h2></button>
                        </div>
                </div>
            }
        </>
    )
}

export default Textbox