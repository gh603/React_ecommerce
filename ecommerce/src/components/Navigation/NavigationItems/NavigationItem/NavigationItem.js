import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { NavItem } from 'react-bootstrap'; 

import './NavigationItem.css'; 

const NavigationItem = (props) => {
  return (
    <NavItem componentClass="span">
        <NavLink to={props.link} exact={props.exact}>{props.children}</NavLink>
    </NavItem>
  )
}

export default NavigationItem;
