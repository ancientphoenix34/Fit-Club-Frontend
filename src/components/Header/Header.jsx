import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth <= 768;

  // Close the menu when the window is resized above mobile width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpened(false); // Close the menu when not in mobile view
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='header'>
      <img src={Logo} alt="Logo" className='logo' />

      {mobile && (
        <div
          className='hamburger-btn'
          style={menuOpened ? { padding: '0.5rem' } : { backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          {menuOpened ? (
            <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <img src={Bars} alt="Menu Bars" style={{ width: '1.5rem', height: '1.5rem' }} />
          )}
        </div>
      )}

      {(!mobile || menuOpened) && (
        <ul className='header-menu'>
          <li>
            <Link onClick={() => setMenuOpened(false)} to='Programs' spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to='plans' spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to='Reasons' spy={true} smooth={true}>
              Reasons
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to='Testimonials' spy={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
