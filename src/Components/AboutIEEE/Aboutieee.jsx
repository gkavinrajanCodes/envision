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
              At SSN College of Engineering, the IEEECS Student Branch Chapter is dedicated to creating an outstanding community on campus. The chapter actively collaborates to organize both technical and non-technical events across various domains, fostering a culture of innovation and excellence among students. Noteworthy events such as the Envision Hackathon and IEEECS Day, held in collaboration with the IEEE CS Madras Section, exemplify the chapter's commitment to providing high-profile, impactful experiences for its members.            
            </p>
            <p>
              In addition to event organization, the IEEECS SSN Student Branch Chapter places significant emphasis on digital marketing efforts. These initiatives aim to raise awareness and engage students in the technology domain, ensuring a broad and inclusive reach within the campus community. Through these efforts, the chapter not only enhances the technical acumen of its members but also builds a cohesive and informed community of future tech leaders.
            </p>
        </div>
    </div>
  )
}

export default Aboutieee
