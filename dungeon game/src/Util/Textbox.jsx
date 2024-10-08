import React, { useState, useEffect } from "react";
import "../css/game.css";
import arrow from "../Util/Arrows.jsx"

function Textbox(props) {
  const text = props.text;

  const [words, setWords] = useState(text[0]);

  useEffect(() => {
    setWords(text[props.count]);

    if (props.count >= text.length) {
      props.hide(false);
      props.setColor("black");
      setWords();
    }
  }, [props.count]);

  useEffect(() => {
    if (props.count === 0) {
      props.setHide1(false);
    }
  }, [props.count]);

  const forward = () => {
    props.setCount((prevCount) => prevCount + 1);

    if (props.count >= 1) {
      props.setHide1(true);
    } else {
      props.setHide1(false);
    }
  };

  const back = () => {
    props.setCount((prevCount) => prevCount - 1);

    if (props.count === 2) {
      props.setHide1(false);
    }
  };

  const { left, right } = arrow();

  return (
    <>
      <div
        id="game_textBox"
        style={{ backgroundColor: props.bgColor, border: props.border }}
      >
        <p style={{ color: props.color }}>{words}</p>
        <div>
          {props.hide1 && (
            <button
              type="button"
              onClick={back}
              style={{ color: props.buttonColor }}
            >
              <h2>{right}</h2>
            </button>
          )}
          <button
            type="button"
            onClick={forward}
            style={{ color: props.buttonColor }}
          >
            <h2>{left}</h2>
          </button>
        </div>
      </div>
    </>
  );
}

export default Textbox;
