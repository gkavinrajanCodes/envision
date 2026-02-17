import React from 'react'
import './Sponsors.css'
import sponsor1 from '../../assets/ssn.png'
import sponsor2 from '../../assets/ieeemas.png'
import sponsor3 from '../../assets/ieeecsmas.png'
import sponsor4 from '../../assets/iic.png'
import sponsor5 from '../../assets/ieeecs-ssn-dark.png'
import sponsor6 from '../../assets/gfg-ssn-body.png'

const Sponsors = () => {
  return (
    <div className='sponsor'>
        <div className="sponsor-logos">
            <img src={sponsor1} alt="SSN" />
            <img src={sponsor2} alt="IEEE MAS" />
            <img src={sponsor3} alt="IEEE CS MAS" />
            <img src={sponsor4} alt="IIC" />
            <img src={sponsor5} alt="IEEE CS SSN" />
            <img src={sponsor6} alt="GFG SSN" />
        </div>
    </div>
  )
}

export default Sponsors
