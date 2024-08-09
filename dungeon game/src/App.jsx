import { useState, useEffect } from "react";
import Intro from "./mainpage/Intro.jsx";
import Header from "./mainpage/Header.jsx";
import BlackScreen from "./Util/BlackScreen.jsx";
import Game from "./Game.jsx";
import "./css/index.css";

function App() {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(false);
  const [opacity, setOpacity] = useState("");
  const [visibility, setVisibility] = useState("");

  const startGame = () => {
    setHide(false);
    setHide1(true);
    sessionStorage.setItem("TutorialPage_Start", "true");
  };

  useEffect(() => {
    const updatePage1 = sessionStorage.getItem("TutorialPage_Start");
    if (updatePage1 === "true") {
      setHide(false);
      setHide1(true);
    }
  }, []);

  return (
    <>
      <BlackScreen opacity={opacity} visibility={visibility} />
      <Header />

      {hide && <Intro start={startGame} healthbar={setHide1} />}
      {hide1 && <Game opacity={setOpacity} visibility={setVisibility} />}
    </>
  );
}

export default App;
