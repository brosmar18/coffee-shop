import React from 'react';
import './MenuItem.css';

const MenuItem = () => {
    <div className="app__menuitem">
        <div className="app__menuitem-head">
            <div className="app__menuitem-name">
                <p className="p__cormorant" style={{ color: '#DCCA87'}}>Title</p>
            </div>
        </div>
        <div className="app__menuitem-dash">
            <div className="app__menuitem-price">
                <p className="p__cormorant">Price</p>
            </div>
        </div>
        <div className="app__menuitem-sub">
            <p className="p__opensans">Tags</p>
        </div>
    </div>
}

export default MenuItem;