import React from 'react'
import './Aboutieee.css'
import ieeecs_logo from '../../assets/ieeecs.jpg'

const Aboutieee = () => {
  return (
    <div className='aboutieee' id = 'aboutieee'>
        <div className='aboutieee-left'>
            <img src= {ieeecs_logo} alt="" className='aboutieee_img'/>
        </div>
        <div className='aboutieee-right'>
            <h3>About IEEE Computer Society</h3>
            <h2>Empowering Innovation, Advancing Computing</h2>
            <p>
                The IEEE Computer Society (IEEECS) is a leading global organization dedicated to advancing the theory, practice, and application of computer science and technology. It serves as a key resource for students, professionals, and researchers, offering various opportunities for learning, collaboration, and innovation.            
            </p>
            <p>
            IEEECS organizes conferences, publishes top-tier journals, and provides technical communities, which help members stay at the forefront of developments in areas like artificial intelligence, cybersecurity, software engineering, and data analytics. With a strong emphasis on professional growth, IEEECS promotes knowledge sharing, skills development, and the fostering of leadership in computing technologies.
            </p>
        </div>
    </div>
  )
}

export default Aboutieee
