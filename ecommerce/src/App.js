import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'; 

import Aux from './hoc/Aux'; 
import Layout from './container/Layout'; 
import Items from './container/Items'; 
import './App.css'; 
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" component={Items}/>
      </Switch>
    ); 
    return (
      <Aux>
        <Layout>
          {routes}
        </Layout>
      </Aux>
    );
  }
}

export default withRouter(App);
