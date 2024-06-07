import Header from './Header.jsx';
import Main from './Door.jsx';
import video from '../assets/background.mp4';

function Intro() {
  return(
    <>
    <Header/>
    <Main/>
    <video src={video} controls autoPlay loop muted></video>
    </>
  )
}

export default Intro;