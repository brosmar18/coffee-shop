import React from 'react';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Menu.css';

const Menu = () => {
    return (
        <div className="app__specialMenu flex__center section__padding" id="menu">
            <div className="app__specialMenu-title">
                <SubHeading title="Menu that fits your palatte" />
                <h1 className="headtext__cormorant">Today&apos;s Special</h1>
            </div>
        </div>
    )
}

export default Menu;
