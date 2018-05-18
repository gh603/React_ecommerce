import React from 'react';

import Aux from '../../../hoc/Aux';
import DrawerToggle from './DrawerToggle/DrawerToggle'; 
import './SideNav.css';

const sideNav = (props) => {
    let attachedClasses = ['sidenav', 'close'];
    if (props.open) {
        attachedClasses = ['sidenav', 'open'];
    };

    return (
        <Aux>
            <DrawerToggle show={!props.open} clicked={props.toOpen} />
            <nav id="mySideNav" className={attachedClasses.join(" ")}>
                <div className='closeSideNav' onClick={props.toClose}>&times; </div>
                <div className='sidebartitle'>
                    Categories
                    <ul className='sideList'>
                        <li>Headphones</li>
                        <li>Shoes</li>
                        <li>Camera Lens</li>
                        <li>Phone</li>
                    </ul>
                </div>
            </nav>
        </Aux>
    )
}

export default sideNav; 
