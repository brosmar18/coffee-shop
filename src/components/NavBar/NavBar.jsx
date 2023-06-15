import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './NavBar.css';

const NavBar = () => {
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
                <GiHamburgerMenu fontSize={27} />
            </div>
        </div>
    )
}

export default NavBar;
