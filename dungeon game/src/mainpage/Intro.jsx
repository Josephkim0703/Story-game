import Start from './Start.jsx';
import Tutorial from './Tutorial.jsx';
import video from '../assets/background.mp4';
import Town from '../assets/background-town.jpeg';
import HealthBar from '../Util/HealthBar.jsx';
import {useState, useEffect} from 'react';

function Intro(props) {

  const [complete, setComplete] = useState(false);
  const [done, setDone] = useState(true);
  const [hide, setHide] = useState(true);
  const [zoom, setZoom] = useState("");
  const [position, setPosition] = useState("");

  

  const start = () => {
    setComplete(true);
    setDone(false); 
  }

  const videoChange = () => {
    setPosition("-6%, 25%");
    setZoom("7");
  }


  return(
    <>
      {done &&
        <> 
          <Start next={start} zoom={videoChange}/>
          <video src={video} controls autoPlay loop muted style={{transform: `scale(${zoom}) translate(${position})`}} id='introPage'></video>
        </>
      }

      {complete && 
        <>
          <Tutorial start={props.start} state={setHide}/>
          <img src={Town} alt="background-Image" id='background-town'/>
          {hide && <HealthBar/>}
        </>
      }
    
    </>
)}

export default Intro;