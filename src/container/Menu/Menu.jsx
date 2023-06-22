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
            <div className="app__specialMenu-menu">
                <div className="app__specialMenu-menu_wine">
                    <p className="app__specialMenu-menu_heading">Wine & Beer</p>
                    <div className="app__specialMenu-menu_items">
                        {data.wines.map((wine, index) => (
                            <p>{wine.title}</p>
                        ))}
                    </div>
                </div>
                <div className="app__specialMenu-menu_img">
                    <img src={images.menu} alt="menu__img" />
                </div>
            </div>
        </div>
    )
}

export default Menu;
