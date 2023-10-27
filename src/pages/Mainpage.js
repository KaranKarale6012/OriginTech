import React, { useEffect } from 'react'

import Footer from '../Components/Footer'

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
        <Footer/>
    </div>
  )
}

export default Mainpage