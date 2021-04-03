import React, { useState } from 'react';
import imgLogo from '../images/Logo.png';
import downArrow from '../images/arrow-down.svg';
import login from '../images/login.svg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <header className='header flex gap-5 align-items-center text-uppercase  justify-space-between'>
        <div className='header__logo flex align-items-center'>
          <img src={imgLogo} alt='logo' className='w-75' />
          <p className='font-size-14'>
            Infotopia
            <span className='display-block font-size-12 color-primary'>
              Academy
            </span>
          </p>
        </div>
        <nav>
          <ul className='header__navigation'>
            <li>
              <a href='#'>library</a>
              <img src={downArrow} alt='down arrow' />
            </li>
            <li>
              <a href='#'>study area</a>
              <img src={downArrow} alt='down arrow' />
            </li>
            <li>
              <a href='#'>courses</a>
              <img src={downArrow} alt='down arrow' />
            </li>
            <li>
              <a href='#'>start-ups</a>
              <img src={downArrow} alt='down arrow' />
            </li>
            <li>
              <a href='#' className='header__login'>
                log in
              </a>
              <img src={login} alt='login image' />
            </li>
          </ul>
          <div className='flex header__mobile-login'>
            <div
              className={`header__humburger ${
                isMenuOpen ? 'header__menu--closed' : ''
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></div>
            <a href='#' className='header__login header__login--mobile'>
              <img src={login} alt='login image' />
            </a>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
