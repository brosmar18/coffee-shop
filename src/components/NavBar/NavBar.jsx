import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './NavBar.css';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='nav'>
            <div className='nav__logo'>
                <img src='https://picsum.photos/640/360' alt='logo' />
            </div>
            <ul className='nav__links'>
                <li className='nav__link'><a href='/'>Home</a></li>
                <li className='nav__link'><a href='/'>About</a></li>
                <li className='nav__link'><a href='/'>Menu</a></li>
                <li className='nav__link'><a href='/'>Awards</a></li>
                <li className='nav__link'><a href='/'>Contact</a></li>
            </ul>
            <div className='nav__login'>
                <a href='/' className='nav__login-link'>Log In</a>
            </div>
            <div className='nav__mobile'>
                <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='nav__mobile-overlay flex-center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setToggleMenu(false)} />
                        <ul className='nav__mobile-links'>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Menu</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Awards</a></li>
                            <li><a href='/' onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavBar;
