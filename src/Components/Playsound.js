import React from 'react'
import "./Playsound.css"
 import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player'
import Background_Audio from "../assets/Background_audio.mp3"
export default function Playsound() {
  const audioPlay = ()=>{
    var audio = new Audio(Background_Audio)
    audio.play();
    window.addEventListener("load",(ev)=>{audio.pause()})
  }
  return (
    
    <div onLoad={()=>audioPlay()}>
        <ReactAudioPlayer id="Audio"  autoPlay={true}
         src={Background_Audio}
         controls={true}
         loop={true}
         
      />
    </div>
  )
}


