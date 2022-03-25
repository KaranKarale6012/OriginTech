import React, { useEffect } from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import GetIntouch from '../Components/GetIntouch'
import Hero from '../Components/Hero'
import HomepageAbout from '../Components/HomepageAbout'
import InformationOverVideo from '../Components/InformationOverVideo'
import Navbar from '../Components/Navbar'
import Playsound from '../Components/Playsound'
import Slider from '../Components/Slider'
import TeslaBoard from '../Components/TeslaBoard'

function Mainpage() {
  // useEffect(()=>{
  //   var audio = Audio()
  // })
  return (
    <div>
        <Navbar/>
        <InformationOverVideo/>
        <Hero/>
        <Playsound/>
        <TeslaBoard/>
        <Slider/>
        <HomepageAbout/>
        <Announcement/>
        {/* <GetIntouch/> */}
        <Footer/>
    </div>
  )
}

export default Mainpage