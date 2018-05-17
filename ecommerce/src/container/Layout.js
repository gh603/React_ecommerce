import {Container} from 'flux/utils'; 
import React, { Component } from 'react'; 

import Layout from '../components/Layout/Layout'; 
import LayoutStore from '../data/store/LayoutStore'; 

class LayoutContainer extends Component {
    static getStores(){
        return [LayoutStore]; 
    }
    
    static calculateState(){
        return {
            isAuth: LayoutStore.getState().get("idToken") !== null, 
            isManager: LayoutStore.getState().get('isManager'),
        }; 
    }

    render(){
        return <Layout children={this.props.children} {...this.state}/>
    }
}

const container = Container.create(LayoutContainer); 

export default container; 