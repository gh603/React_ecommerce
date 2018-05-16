import React from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

import NavigationItems from '../NavigationItems/NavigationItems'; 

const NavBar = (props) => {
    return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">React-Commerce</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
                <NavigationItems {...props}/>
            </Navbar.Collapse>
        </Navbar>
  ); 
}

export default NavBar; 
