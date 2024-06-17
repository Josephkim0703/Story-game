import { useState, useEffect } from 'react';
import Intro from './mainpage/Intro.jsx';
import Header from './mainpage/Header.jsx';
import HealthBar from './Util/HealthBar.jsx';
import Game from './Game.jsx'
import './css/index.css';

function App() {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(false);

  useEffect(() => {
    //grabs the start variable if the var is true then set those things
    const updatePage = localStorage.getItem('start_1');
    if (updatePage === 'true') {
      setHide(false);
      setHide1(true);
    }
  }, []);

  const startGame = () => {
    setHide(false);
    setHide1(true);
    //create a variable called start and set it to true
    localStorage.setItem('start_1', 'true');
  };

  return(
    <>
    <Header/>
    {hide &&  <Intro start={startGame} healthbar={setHide1}/>}
    {hide1 &&
      <>
        <Game/>    
        <HealthBar/>
      </>}
    </>
  )
 
}

export default App
