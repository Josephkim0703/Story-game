import { useState } from 'react';
import Intro from './mainpage/Intro.jsx';
import Header from './mainpage/Header.jsx';
import HealthBar from './mainpage/HealthBar.jsx';
import './css/App.css';

function App() {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(false);

  const startGame = () => {
    setHide(false);
  
  };

  return(
    <>
    <Header/>
    {hide &&  <Intro start={startGame} healthbar={setHide1}/>}
    {hide1 && <HealthBar/>}
    </>
  )
 
}

export default App
