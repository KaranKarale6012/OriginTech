import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import GetIntouch from '../Components/GetIntouch'
import Hero from '../Components/Hero'
import HomepageAbout from '../Components/HomepageAbout'
import Navbar from '../Components/Navbar'
import Playsound from '../Components/Playsound'
import Slider from '../Components/Slider'
import TeslaBoard from '../Components/TeslaBoard'

function Mainpage() {
  return (
    <div>
        <Navbar/>
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