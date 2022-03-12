import React from 'react'
import "./Playsound.css"
// import ReactPlayer from 'react-player'
import ReactAudioPlayer from 'react-audio-player'
import Background_Audio from "../assets/Background_audio.mp3"
export default function Playsound() {
  return (
    <div>
        <ReactAudioPlayer id="Audio"  autoPlay={true}
         src={Background_Audio}
         controls={true}
         loop={true}
         
      />
      <h1>45</h1>
    </div>
  )
}

