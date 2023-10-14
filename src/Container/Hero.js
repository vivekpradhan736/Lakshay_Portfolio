import React from 'react'
import "./Hero.css"
import dp from "../assets/images/lakshay01.jpg"

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <div className='card'>
        <img className='bgImg' src="https://yashjain.design/wp-content/uploads/2023/03/6353108-1.webp" alt="" />
        <div className='mainCard'>
          <div className='content'>
            <img className='mobileImg' src={dp} alt="" />
            <h1>Hi, i am <img className='image' src={dp} alt="" /> Lakshay Goyal !</h1>
            <h1>I design websites and enjoy</h1>
            <h1>traveling to new places</h1><br />
            <h4>If you're searching for a designer to transform your ideas into reality,</h4>
            <h4>let's collaborate and bring them to life!</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
