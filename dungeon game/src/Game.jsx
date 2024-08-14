import "./css/game.css";
import Game0 from "./Game/Riddle.jsx";
import Game1 from "./Game/Fairy.jsx";
import Game2 from "./Game/Map.jsx";
import Textbox from "./Util/Textbox.jsx";
import HealthBar from "./Util/HealthBar.jsx";
import { useState, useEffect } from "react";

//add end scene when all hearts are lost
//add gain health on riddle level
//add new goblin or talking background

function Game(props) {
  const [text, setText] = useState(["..."]);
  const [count, setCount] = useState(0);
  const [background, setBackground] = useState();
  const [border, setBorder] = useState("");
  const [color, setColor] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [bgcolor, setBgcolor] = useState("");
  const [blur, setBlur] = useState("");

  //hide text box
  const [hide, setHide] = useState(true);
  //hide back button
  const [hide1, setHide1] = useState(false);
  //hide health bar
  const [hide2, setHide2] = useState(true);

  /*grabs the heart status from local storage if it exists then sets heart
      to savedHearts but if it isnt then it sets it to default array.
      then returns the the heart status from arrow function
    */
  const [num, setNum] = useState(10);
  const [hearts, setHearts] = useState(() => {
    const heartStatus = sessionStorage.getItem("Player_HeartStatus");
    return heartStatus ? JSON.parse(heartStatus) : Array(num).fill(true);
  });

  useEffect(() => {
    sessionStorage.setItem("Player_HeartStatus", JSON.stringify(hearts));
  }, [hearts, num]);

  function die() {
    const prevHeart = hearts.lastIndexOf(true);
    if (prevHeart !== false) {
      const newArray = [...hearts];
      newArray[prevHeart] = false;
      setHearts(newArray);
    }
  }

  function live() {
    const prevHeart = hearts.indexOf(false);
    if (prevHeart !== true) {
      const newArray = [...hearts];
      newArray[prevHeart] = true;
      setHearts(newArray);
    } else {
      setNum((prevNum) => prevNum + 1);
      setHearts((prevHearts) => [...prevHearts, true]);
    }
  }

  const [Game, setGame] = useState([true, false, false]);

  function UpdateHide(index, value) {
    setGame((prevGame) => {
      const newGame = [...prevGame];
      newGame[index] = value;
      return newGame;
    });
  }

  useEffect(() => {
    const updatePage2 = sessionStorage.getItem("G1_Complete");
    if (updatePage2 === "true") {
      UpdateHide(0, false);
    }

    const updatePage3 = sessionStorage.getItem("G2_Complete");
    if (updatePage3 === "true") {
      UpdateHide(1, false);
    }
  }, []);

  if (Game[0] === false) {
    setTimeout(() => {
      UpdateHide(1, true);
    });

    setTimeout(() => {
      props.visibility("");
    }, 4000);
  }



  return (
    <>
      {Game[0] && (
        <Game0 die={die} live={live} finish={UpdateHide} background={setBackground}
          hide={setHide} hide1={setHide1} hide2={setHide2} count={count} setCount={setCount}
          setColor={setColor} setBgcolor={setBgcolor} setBorder={setBorder} setButtonColor={setButtonColor}
          setBlur={setBlur} setOpacity={props.opacity} setVisibility={props.visibility} setText={setText}/>
      )}

      {Game[1] && (
        <Game1 setText={setText} die={die} live={live} background={setBackground}
          setCount={setCount} count={count} hide={setHide} hide1={setHide1} finish={UpdateHide}
          setButtonColor={setButtonColor} setColor={setColor} setBgcolor={setBgcolor} setBorder={setBorder}/>
      )}

      {Game[2] && (
       <Game2 setText={setText} die={die} live={live} background={setBackground}
          setCount={setCount} count={count} hide={setHide} hide1={setHide1} finish={UpdateHide}
          setButtonColor={setButtonColor} setColor={setColor} setBgcolor={setBgcolor} setBorder={setBorder}/>
      )}

      {hide && (
        <Textbox text={text} count={count} setCount={setCount} hide={setHide} hide1={hide1} setHide1={setHide1} 
        color={color} setColor={setColor} bgColor={bgcolor} border={border} buttonColor={buttonColor}/>
      )}

      {hide2 && <HealthBar hearts={hearts} />}

      <img src={background} alt="Image" id="game_background" style={{ filter: blur }}/>
    </>
  );
}

export default Game;
