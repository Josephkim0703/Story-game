import "../css/game.css";
import "../css/index.css";
import { useState, useEffect } from "react";

import background1 from "../assets/Backgrounds/background_singletree.png"

function Map(props){
    const [hide, setHide] = useState(Array(5).fill(false));
    const [background, setBackground] = useState(background1);

    const text = [
        "...",
        "How did you find out about the ruins most people think that it's just a fairy tale?"
    ];

    useEffect(() => {
        props.hide(true);
        props.setText(text);     
        props.background(background);
    },[])

    function UpdateHide(index, value) {
        setHide((prevHide) => {
          const newArray = [...prevHide];
          newArray[index] = value;
          return newArray;
        });
      }
    

    return(
        <>
        
        </>
    );
}

export default Map;