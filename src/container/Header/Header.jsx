import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';

const Header = () => {
    return (
        <div className='app__header app__wrapper section_padding' id='home'>
            <div className='app__wrapper_info'>
                <SubHeading />
                <h1 className='app__header-h1'>The Key To Fine Dining</h1>
            </div>
        </div>
    )
}

export default Header;
