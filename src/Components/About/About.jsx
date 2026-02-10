import React from 'react'
import './About.css'
import envision_logo from '../../assets/envision-logo.png'

const About = () => {
  return (
    <div className='about' id = 'about'>
        <div className='about-left'>
            <img src= {envision_logo} alt="" className='about_img'/>
        </div>
        <div className='about-right'>
            <h3>About ENVISION</h3>
            <h2>Where ideas meet possibilities</h2>
            <p>
            Envision 2026 is a 24-hour hackathon where teams come together to build working prototypes from scratch. Over the course of the event, participants develop their ideas, incorporate feedback, and pitch their solutions to a panel of judges. It's a chance to turn ambitious concepts into real products and connect with others who are equally driven to create something meaningful.
           </p>
        </div>
    </div>
  )
}

export default About
