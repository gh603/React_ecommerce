import React from 'react';

import Aux from '../../../hoc/Aux'; 
import './SideNav.css'; 

const sideNav = (props) => {
    let attachedClasses = ['sidenav', 'close']; 
    if(props.open){
        attachedClasses = ['sidenav', 'open']; 
    }; 

    return (
        <Aux>
            <nav id="mySideNav" className={attachedClasses.join(" ")}>
                <div className='closeSideNav' onClick={props.closed}>&times; </div>
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
