import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'; 

import Aux from './hoc/Aux'; 
import Layout from './container/Layout'; 
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/"/>
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
