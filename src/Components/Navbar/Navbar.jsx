import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/ieeecs-ssn.png';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  const location = useLocation();
  const isTimerPage = location.pathname === '/timer';

  useEffect(() => {
    window.addEventListener('scroll', () => {
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

  // On non-home pages, clicking a scroll link should go home first
  const HomeScrollLink = ({ to, offset, children }) => {
    if (isTimerPage) {
      return (
        <RouterLink to={`/#${to}`} onClick={closeMenu}>{children}</RouterLink>
      );
    }
    return (
      <ScrollLink to={to} smooth='true' offset={offset} duration={500} onClick={closeMenu}>
        {children}
      </ScrollLink>
    );
  };

  return (
    <nav className={sticky ? 'dark-nav' : ''}>
      <div className='container nav-container'>
        <RouterLink to="/">
          <img src={logo} alt="" className='logo' />
        </RouterLink>
        <ul className={mobileMenu ? 'hide-mobile-menu' : ''}>
          <li><HomeScrollLink to='hero' offset={0}>Home</HomeScrollLink></li>
          <li><HomeScrollLink to='about' offset={-150}>About Envision</HomeScrollLink></li>
          <li><HomeScrollLink to='faq' offset={-260}>Guidelines</HomeScrollLink></li>
          <li><HomeScrollLink to='gallery' offset={-200}>Gallery</HomeScrollLink></li>
          <li><HomeScrollLink to='aboutieee' offset={-150}>About IEEECS</HomeScrollLink></li>
          <li><button className='btn'><HomeScrollLink to='contact' offset={-260}>Contact us</HomeScrollLink></button></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
