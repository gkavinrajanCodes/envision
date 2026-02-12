import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/ieeecs-ssn-dark.png';
import logo_ssn from '../../assets/ssn.png';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(true);
  };

  return (
    <nav className={sticky ? 'dark-nav': ''}>
      <div className='container nav-container'>
        <img src={logo} alt="IEEECS-SSN" className='logo' />
        <ul className= {mobileMenu ? 'hide-mobile-menu' : ''}>
          <li><Link to='hero' smooth = 'true' offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
          <li><Link to='about' smooth = 'true' offset={-150} duration={500} onClick={closeMenu}>About Envision</Link></li>
          <li><Link to='faq' smooth = 'true' offset={-260} duration={500} onClick={closeMenu}>Guidelines</Link></li>
          <li><Link to='gallery' smooth = 'true' offset={-200} duration={500} onClick={closeMenu}>Gallery</Link></li>
          <li><Link to='aboutieee' smooth = 'true' offset={-150} duration={500} onClick={closeMenu}>About IEEECS</Link></li>
          <li><button className='btn'><Link to='contact' smooth = 'true' offset={-260} duration={500} onClick={closeMenu}>Contact us</Link></button></li>
        </ul>
        <img src={logo_ssn} alt="SSN" className='logo' />
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
