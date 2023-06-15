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
        </div>
    )
}

export default NavBar;
