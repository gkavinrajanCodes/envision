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
                Envision 2025 builds upon the success of its inaugural season by transforming into a two-day buildathon where creativity meets collaboration. This dynamic event brings together developers, designers, and strategists to form cross-disciplinary teams and transform ideas into impactful product prototypes.             
            </p>
            <p>
                Whether you're coding the backbone, crafting stunning user experiences, or strategizing bold solutions, Envision 2025 is your chance to showcase your skills. With expert mentorship, collaborative synergy, and a focus on innovation, teams will work tirelessly to create, refine, and pitch their projects to an esteemed panel of judges. It's more than just a competition—it’s where visions come to life.
            </p>
        </div>
    </div>
  )
}

export default About
