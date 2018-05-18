import React from 'react'; 

import './DrawerToggle.css'; 

const DrawerToggle = (props) => {
    return (
        <div>
            <span
                className='DrawerToggle' 
                onClick={props.clicked}>&#9776; Filter</span>
        </div>
    )
}

export default DrawerToggle;
