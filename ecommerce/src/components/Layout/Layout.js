import React from 'react'; 

import Aux from '../../hoc/Aux'; 
import NavBar from '../Navigation/Navbar/NavBar'; 

const Layout = (props) => {
  return (
    <Aux>
        <NavBar {...props}/>
        <div>Side Bar</div>
        <div>Main</div>
    </Aux>
  )
}

export default Layout;
