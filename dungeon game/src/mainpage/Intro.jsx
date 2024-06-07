import Header from './Header.jsx';
import Main from './Start.jsx';
import video from '../assets/background.mp4';
import {useState} from 'react';

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