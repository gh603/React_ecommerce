import React from 'react';
import { Nav } from 'react-bootstrap';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <Nav pullRight>
      {props.isManager ? <NavigationItem link="/manage">Manage</NavigationItem> : null}
      {props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
      {props.isAuth ? <NavigationItem link='/cart'>Shopping Cart</NavigationItem> : null}
      {props.isAuth ? <NavigationItem link='/account'>Account</NavigationItem> : null}
      {props.isAuth 
        ? <NavigationItem link='/logout'>Log Out</NavigationItem> 
        : <NavigationItem link='login'>Log In</NavigationItem>}
    </Nav>
  )
}

export default navigationItems; 
