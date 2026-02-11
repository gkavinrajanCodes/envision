import React from 'react'
import './Sponsors.css'
import sponsor1 from '../../assets/SSN-01.png'
import sponsor2 from '../../assets/ieeecs-ssn-dark.png'
import sponsor3 from '../../assets/gfg-ssn-body.png'
import sponsor4 from '../../assets/iic.png'

const Sponsors = () => {
  return (
    <div className='sponsor'>
        <div className="sponsor-logos">
            <img src={sponsor1} alt="SSN" />
            <img src={sponsor2} alt="IEEECS SSN" />
            <img src={sponsor3} alt="GFG SSN" />
            <img src={sponsor4} alt="IIC" />
        </div>
    </div>
  )
}

export default Sponsors
