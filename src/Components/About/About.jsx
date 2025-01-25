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
            <h2>Where Ideas meets Possibilities</h2>
            <p>
                Envision 2025 builds upon the success of its inaugural season by transforming into an intense 24-hour build-a-thon, designed to push participants’ creativity, technical skills, and innovation to new levels.            
            </p>
            <p>
                The upcoming season introduces three different roles for participants to choose from, each focusing on key players of developing a product and encouraging students to think beyond conventional solutions.
            </p>
            <p>
                The provided tracks are carefully curated to pique participants’ curiosity and foster collaboration and networking, driving them to develop sustainable, impactful solutions within a high-energy, time-sensitive environment. With an expanded scope and attractive prize money, Envision 2025 promises an even more dynamic, immersive experience for all involved.
            </p>
        </div>
    </div>
  )
}

export default About
