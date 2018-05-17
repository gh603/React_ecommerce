import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import NavBar from '../Navigation/Navbar/NavBar';
import SideNav from '../Navigation/SideNav/SideNav';

class Layout extends Component {
  state = {
    showSideNav: false, 
  }

  sideNavCloseHandler = () => {
    this.setState({ showSideNav: false }); 
  }

  sideNavOpenHanlder = () => {
    this.setState({ showSideNav: true }); 
  }

  render() {
    return (
      <Aux>
        <SideNav open={this.state.showSideNav} closed={this.sideNavCloseHandler}/>
        <NavBar isAuth={this.props.isAuth} isManager={this.props.isManager} />
        <main>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
