import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Timeline from './Components/Timeline/Timeline'
import Aboutieee from './Components/AboutIEEE/Aboutieee'
import FAQ from './Components/FAQ/FAQ'
import RegistrationFee from './Components/RegistrationFee/RegistrationFee'
import Sponsors from './Components/Sponsors/Sponsors'
import Reach from './Components/Reach/Reach'
import Coordinator from './Components/Coordinator/Coordinator'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <About/>
        <Title subtitle = 'Organised By' title = ''/>
        <Sponsors/>
        <Title subtitle = 'Roles' title = 'Choose your Path'/>
        <Programs/>
        <Title subtitle = 'Timeline' title = 'From concept to conquest'/>
        <Timeline/>
        <RegistrationFee/>
        <Title subtitle = 'Guidelines' title = 'Envision 2025 Participation Guidelines'/>
        <FAQ/>
        <Title subtitle = 'GALLERY' title = 'Past Envision'/>
        <Campus/>
        <Aboutieee/>
        <Coordinator/>
        <Reach/>
        <Title subtitle = 'CONTACT US' title = 'Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
