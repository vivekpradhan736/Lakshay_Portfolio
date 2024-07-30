import React from 'react'
import "./Footer.css"
import gif from "../assets/images/creep-stalker.gif"
import instagram from "../assets/images/instagram1.png"
import linkedin from "../assets/images/linkedin1.png"
import twitter from "../assets/images/twitter1.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerCard'>
      <img src={gif} width="70" height="70" align="middle" alt='' />

      <div className='title'>
        <h1>Say Hi ! or internet stalk him more or</h1>
        <h1>let's go somewhere together.</h1>
      </div>

      <div className='social grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 md:grid-flow-row'>
        <div className='socialLink'>
            <a href=""> <img src={instagram} alt="" /> </a>
        </div>

        <div className='socialLink'>
            <a href=""> <img src={linkedin} alt="" /> </a>
        </div>

        <div className='socialLink'>
            <a href=""> <img src={twitter} alt="" /> </a>
        </div>
      </div>

      <div className='bottom'>
        <h2>CopyRight © 2023 Lakshay Goyal</h2>
        <h2>Crafted with ❤️ by Lakshay Goyal</h2>
      </div>
      </div>
    </div>
  )
}

export default Footer
