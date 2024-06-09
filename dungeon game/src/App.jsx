import { useState } from 'react';
import Intro from './mainpage/Intro.jsx';
import './css/App.css';

function App() {
  const [hide, setHide] = useState(true);

  const startGame = () => {
    setHide(false);
  };

  return(
    <>
    {hide &&  <Intro start={startGame}/>}
    </>
  )
 
}

export default App
