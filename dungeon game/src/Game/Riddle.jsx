import "../css/game.css";
import "../css/index.css";
import { useState, useEffect } from "react";
import arrow from "../Util/Arrows.jsx";

import background from "../assets/Backgrounds/background_town.png";
import background_Char from "../assets/Backgrounds/background_town_1.png";
import alley from "../assets/Backgrounds/background_alley.png";
import alley_blue from "../assets/Backgrounds/background_alley1.png";
import death from "../assets/Characters/Death_Noface.png";
import skull from "../assets/Characters/skull.png";
import Chalice from "../assets/Util/Chalice.png";
import Chalice_Splash from "../assets/Util/Chalice_splash.png";
import card from "../assets/Util/tarot_back.png";

function Game1(props) {
  const [hover, setHover] = useState(Array(3).fill(false));

  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(true);
  const [hide4, setHide4] = useState(false);

  const [display, setDisplay] = useState("none");
  const [opacity, setOpacity] = useState(0);
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);
  const [opacity3, setOpacity3] = useState(0);
  const [brightness, setBrightness] = useState("");

  const text = [
    "...",
    "The time has finally come for me to make a name for myself!",
    "Imagine the treasures and glory awaiting if I uncover the secrets of Alexandria!",
    "And of course I can't forget about...",
    "the Wom...",
    "בצלמות העמוקה, שם פחדים דלקים, אני השטן רואה את האור.",
    "What was that!?",
    "I swear I saw something run here...",
    "Ahhhhh!!!",
    "I hear you're seeking to explore the ruins...",
    "I've an elixir that can grant you another life.",
    "Once consumed it will aid you when all hope seems lost...",
    "To obtain it, you must choose the right chalice by solving my riddle.",
    "But if you fail! תאבד חיים אחד.",
    "Do you accept?",
    "Uhhhh...",
    "This seems really suspicious, but...",
    "Theoretically, it's a 50-50 chance, right?",
    "...",
    "Fuck it we ball",
  ];

  const riddle = [
    "I am the end of all things, the shadow's embrace",
    "A path that all must tread, yet none can retrace.",
    "Some call me silence, where all voices cease",
    "Others see darkness, a void without peace.",
    "But look deeper, where the truth might lie",
    "I am not ONE or the OTHER... What am I?",
  ];

  const deathText = ["Incorrect!", "The asnwer is...", "DEATH"];

  const saveText = [
    "Congradulations!",
    "And I hope...",
    "our paths do not merge to soon.",
  ];

  useEffect(() => {
    props.setText(text);
    props.background(background);
  }, [props.setText]);

  useEffect(() => {
    if (props.count === 5 || props.count === 6) {
      props.background(background_Char);
    }

    if (props.count === 7) {
      props.background(background);
      props.hide(false);
      props.hide1(false);

      setHide(true);
      setDisplay("block");

      setTimeout(() => {
        setOpacity(1);
      }, 1000);
    }

    if (props.count >= 7 && props.count <= 8) {
      props.hide1(false);
    }

    if (props.count === 8) {
      setOpacity1(1);
      props.background(alley_blue);
    }

    if (props.count === 5) {
      const counter1 = props.count === 5;
      props.setColor(counter1 ? "#B22222" : "");
      props.setButtonColor(counter1 ? "#B22222" : "");
      props.setBgcolor(counter1 ? "rgba(0, 0, 0, 0.5)" : "");
      props.setBorder(counter1 ? "2px solid white" : "");
    } else {
      const counter = props.count >= 9 && props.count <= 14;
      props.setColor(counter ? "#B22222" : "");
      props.setButtonColor(counter ? "#B22222" : "");
      props.setBgcolor(counter ? "rgba(0, 0, 0, 0.5)" : "");
      props.setBorder(counter ? "2px solid white" : "");
    }

    if (props.count < 7) {
      setHide1(false);
    }

    if (props.count === text.length) {
      setHide2(true);
      setTimeout(() => {
        setOpacity3(1);
      });
    }
  }, [props.count]);

  const nextSet = () => {
    setHide1(true);
    setDisplay("none");
    props.hide(true);
    props.background(alley);
  };

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
    color: hover[1] ? "orange" : "",
  };

  const [script, setScript] = useState();
  const [color, setColor] = useState("white");

  function nextLevel(text, setText) {
    setHide3(false);
    setHide4(true);
    props.hide2(false);

    setTimeout(() => {
      setText(text[0]);
      setOpacity2(1);
      setTimeout(() => {
        setOpacity2(0);
        setTimeout(() => {
          setOpacity2(1);
          setText(text[1]);
          setTimeout(() => {
            setOpacity2(0);
            setTimeout(() => {
              setColor("red");
              setOpacity2(1);
              setText(text[2]);
              setBrightness("brightness(2)");
              setTimeout(() => {
                props.setBlur("blur(8px) brightness(0.5)");
                setTimeout(() => {
                  props.setOpacity(1);
                  props.setVisibility("visible");
                  setTimeout(() => {
                    sessionStorage.setItem("G1_Complete", "true");
                    props.setCount(0);
                    props.finish(0, false);
                    props.finish(1, true);
                    props.setBlur("");
                    props.hide(true);
                    props.hide2(true);
                    props.setOpacity(0);
                  }, 4000);
                }, 2500);
              }, 500);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 1000);
    }, 500);
  }

  const incorrect = () => {
    nextLevel(deathText, setScript);
    props.die();
    sessionStorage.setItem("G1_PlayerStatus", false);
  };

  const correct = () => {
    nextLevel(saveText, setScript);
    props.live();
    sessionStorage.setItem("G1_PlayerStatus", true);
  };

  const {left, right} = arrow();

  return (
    <>
      {hide && (
        <div id="game_arrow" style={{ opacity: opacity, display: display }}>
          <button
            type="button"
            onClick={nextSet}
            onMouseEnter={() => enter(1)}
            onMouseLeave={() => exit(1)}
          ></button>
          <h2 style={style}>{left}</h2>
        </div>
      )}

      {hide1 && (
        <div id="game1" className="GameScreen">
          <img
            src={death}
            alt="image"
            id="reaper"
            style={{ opacity: opacity1 }}
            draggable="false"
          />
          {hide4 && (
            <h2 style={{ opacity: opacity2, color: color }}>{script}</h2>
          )}

          {hide2 && (
            <>
              <button type="button" id="button_skull" onClick={correct}>
                <img
                  src={skull}
                  alt=""
                  id="skull"
                  style={{ filter: brightness }}
                  draggable="false"
                />
              </button>

              {hide3 && (
                <>
                  <div id="setup" style={{ opacity: opacity3 }}>
                    <button
                      type="button"
                      onClick={incorrect}
                      onMouseEnter={() => enter(2)}
                      onMouseLeave={() => exit(2)}
                    >
                      <img
                        src={hover[2] ? Chalice_Splash : Chalice}
                        alt="Image"
                        id="Chalice1"
                        draggable="false"
                      />
                      <h1>Tomorrow</h1>
                    </button>

                    <button
                      type="button"
                      onClick={incorrect}
                      onMouseEnter={() => enter(3)}
                      onMouseLeave={() => exit(3)}
                    >
                      <img
                        src={hover[3] ? Chalice_Splash : Chalice}
                        alt="Image"
                        id="Chalice2"
                        draggable="false"
                      />
                      <h1>Night</h1>
                    </button>
                  </div>

                  <div id="textBox_riddle" style={{ opacity: opacity3 }}>
                    <img src={card} alt="" draggable="false" />
                    {riddle.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Game1;
