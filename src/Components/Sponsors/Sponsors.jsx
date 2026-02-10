import React from 'react'
import './Sponsors.css'
import sponsor1 from '../../assets/ieeecs-ssn-dark.png'
import sponsor2 from '../../assets/iic.png'
import sponsor3 from '../../assets/SSN-01.png'


const Sponsors = () => {
  return (
    <div className='sponsor'>
        <div className="sponsor-logos">
            <img src={sponsor3} alt="Sponsor 1" />
            <img src={sponsor1} alt="Sponsor 2" />
            <img src={sponsor2} alt="Sponsor 3" />
        </div>
    </div>
  )
}

export default Sponsors
